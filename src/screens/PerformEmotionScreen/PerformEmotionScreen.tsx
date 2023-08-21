import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { makePerformEmotionScreenStyles } from './PerformEmotionScreen.style';
import { Camera } from 'react-native-vision-camera';
import { useAuthorizedCamera, CameraComponent } from '../../components';
import { HomeRoutes, PerformEmotionType } from '../../stacks/HomeParams';
import RNFS from 'react-native-fs';
import Countdown from './CountDown';
import { useUserData } from '../../contexts';
import { insigniasEnum } from '../../types';

interface Prediction {
  emocion: string;
}

const PerformEmotionScreen: FC<PerformEmotionType> = ({ route, navigation }) => {
  const { emotion: emotionParam, type } = route.params;
  const style = makePerformEmotionScreenStyles();
  const cameraRef = useRef<Camera>(null);
  const { isAuthorized, requestCameraPermission } = useAuthorizedCamera();
  const [imageBase64, setImageBase64] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [response, setResponse] = useState('');
  const [finishedCountDown, setFinishedCountDown] = useState(false);
  const [userReady, setUserReady] = useState(false);
  const [startDetectionEmotion, setStartDetectionEmotion] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const predictionsCant = 15;
  const { updateInsignias } = useUserData();

  const analyzeEmotion = useCallback(
    (
      predictionsData: Prediction[],
      percentage: number,
      consecutiveRecognitionSuccess: number,
    ) => {
      console.log('Comienza el analisis');
      console.log(JSON.stringify(predictionsData));

      const emotionSelected = emotionParam.name;
      let numberOfHits = 0;
      let consecutiveEmotions = 0;

      // Primer criterio: Obtener el x% de predicciones correctas
      for (const prediction of predictionsData) {
        if (prediction.emocion && emotionSelected) {
          if (
            prediction.emocion.toLocaleLowerCase() ===
            emotionSelected.toLowerCase()
          ) {
            numberOfHits++;
          }
        } else {
          console.log('ERROR ', prediction.emocion, ' ', emotionSelected);
        }
      }

      const percentageEmotions = (numberOfHits / predictionsData.length) * 100;

      // Segundo criterio: Obtener x cantidad de detecciones consecutivas correctas
      for (const prediction of predictionsData) {
        if (prediction.emocion) {
          if (
            prediction.emocion.toLowerCase() === emotionSelected.toLowerCase()
          ) {
            consecutiveEmotions++;
            if (consecutiveEmotions >= consecutiveRecognitionSuccess) {
              break;
            }
          } else {
            consecutiveEmotions = 0;
          }
        } else {
          console.log('ERROR: Prediccion no detectada', prediction.emocion);
        }
      }

      return (
        percentageEmotions >= percentage ||
        consecutiveEmotions >= consecutiveRecognitionSuccess
      );
    },
    [emotionParam.name],
  );

  const navigateToFeedback = useCallback(
    (detection: boolean) => {
      if (detection) {
        if (type == 'Arcade') {
          navigation.navigate(HomeRoutes.ASOCIATION, {
            emotion: emotionParam,
            type,
          });
        } else {
          // Ruleta y Mirror
          updateInsignias({
            idInsignia:
              `${type}_${emotionParam.name}` as unknown as insigniasEnum,
          });
          navigation.navigate(HomeRoutes.FEEDBACK_POS_MIRROR_RULETA, {
            emotion: emotionParam,
            type,
          });
        }
      } else {
        if (type == 'Arcade') {
          navigation.navigate(HomeRoutes.FEEDBACK_NEG_ARCADE, {
            emotion: emotionParam,
            type,
          });
        } else {
          navigation.navigate(HomeRoutes.FEEDBACK_NEG_MIRROR_RULETA, {
            emotion: emotionParam,
            type,
          });
        }
      }
    },
    [emotionParam, navigation, type, updateInsignias],
  );

  const detectEmotionsApi = (imageData: string) => {
    const url = 'http://192.168.0.99:3001/detect-emotion';
    const body = {
      image: imageData,
    };
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(responseApi => responseApi.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  const takePicture = useCallback(async () => {
    try {
      if (isAuthorized && cameraRef.current) {
        const image = await cameraRef.current.takePhoto();
        if (image && image.path) {
          const base64 = await RNFS.readFile(image.path, 'base64');
          setImageBase64(base64);
          // Elimino la imagen luego de obtener la cadena para no incrementar la cache
          await RNFS.unlink(image.path);
        } else {
          console.error('Error al capturar la imagen');
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [isAuthorized]);

  useEffect(() => {
    if (imageBase64 && imageBase64 !== '') {
      detectEmotionsApi(imageBase64).then(predict => {
        // TODO: Revisar cuando emotion es undefined para que tome otra imagen, esto sucede porque la api no reconoce una cara (creo)
        const { emotion } = JSON.parse(JSON.stringify(predict));
        setPredictions(prevPredictions => [
          ...prevPredictions,
          { emocion: emotion },
        ]);

        console.log(emotion);
        setResponse(emotion);
      });
    }
  }, [imageBase64]);

  useEffect(() => {
    // Se realizan dos mediciones intermedia para acelerar el resultado positivo
    let updateRefresh = true;
    if (predictions) {
      if (predictions.length === 5 || predictions.length === 10) {
        let percentage = 70;
        let detectionsConsecutive = 5;
        const analyzeResult = analyzeEmotion(
          predictions,
          percentage,
          detectionsConsecutive,
        );
        if (analyzeResult) {
          navigateToFeedback(analyzeResult);
          updateRefresh = false;
        }
      }
      if (predictions.length === predictionsCant) {
        const lastAnalyze = analyzeEmotion(predictions, 65, 6);
        navigateToFeedback(lastAnalyze);
        updateRefresh = false;
      }
    }

    if (updateRefresh) {
      setRefresh(!refresh);
    }
  }, [predictions]);

  useEffect(() => {
    if (startDetectionEmotion) {
      takePicture();
    }
  }, [startDetectionEmotion, takePicture]);

  useEffect(() => {
    takePicture();
  }, [refresh, takePicture]);

  useEffect(() => {
    if (userReady && finishedCountDown) {
      setStartDetectionEmotion(prev => {
        return !prev;
      });
    }
  }, [finishedCountDown, userReady]);

  return (
    <View style={style.containerView}>
      <CameraComponent
        emotion={emotionParam}
        ref={cameraRef}
        cameraPosition={'front'}
        isAuthorized={isAuthorized}
        requestCameraPermission={requestCameraPermission}
      />
      <View style={style.containerButton}>
        {!userReady ? (
          <Button
            style={style.button}
            opacity={0.5}
            bg="#56CD54"
            rounded={16}
            onPress={() => setUserReady(true)}>
            <Text color='black' fontSize={32}>¡Estoy listo!</Text>
          </Button>
        ) : !finishedCountDown ? (
          <Countdown
            duration={3}
            size={40}
            color="#ff00ff"
            onFinished={() => setFinishedCountDown(true)}
          />
        ) : (
          <Text fontSize={32} color="#ff00ff">
            Ya!
          </Text>
        )}
      </View>
      {response ? (
        <Text fontSize={32} color="#ff00ff">
          {JSON.stringify(response)}
        </Text>
      ) : null}
    </View>
  );
};

export default PerformEmotionScreen;
