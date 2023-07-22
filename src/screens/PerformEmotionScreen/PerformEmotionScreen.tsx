import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { makePerformEmotionScreenStyles } from './PerformEmotionScreen.style';
import { Camera } from 'react-native-vision-camera';
import { useAuthorizedCamera } from '../../components/Camera/useAuthorizedCamera';
import { PerformEmotionType } from '../../stacks/HomeParams';
import RNFS from 'react-native-fs';
import Countdown from './CountDown';
import { CameraComponent } from '../../components/Camera';

interface Prediction {
  emocion: string;
}

const PerformEmotionScreen: FC<PerformEmotionType> = ({ route }) => {
  const { emotion } = route.params;
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

  const analyzeEmotion = (predictions: Prediction[]) => {

    console.log("Comienza el analisis");
    console.log(JSON.stringify(predictions));

    const emotionSelected = emotion.name;
    const percentage = 70;
    const requiredConsecutiveEmotions = 8;
    let numberOfHits = 0;
    let consecutiveEmotions = 0;

    // Primer criterio: Obtener el x% de predicciones correctas
    for (const prediction of predictions) {
      if (prediction.emocion && emotionSelected) {
        if (prediction.emocion.toLocaleLowerCase() === emotionSelected.toLowerCase()) {
          numberOfHits++;
        }
      } else {
        console.log('ERROR ', prediction.emocion, ' ', emotionSelected);
      }
    }

    const percentageEmotions = (numberOfHits / predictions.length) * 100;

    // Segundo criterio: Obtener x cantidad de detecciones consecutivas correctas
    for (const prediction of predictions) {
      if (prediction.emocion) {
        if (prediction.emocion.toLowerCase() === emotionSelected.toLowerCase()) {
          consecutiveEmotions++;
          if (consecutiveEmotions >= requiredConsecutiveEmotions) {
            break;
          }
        } else {
          consecutiveEmotions = 0; // Reinicia el contador si la emoción no coincide
        }
      } else {
        console.log('ERROR: Prediccion no detectada', prediction.emocion);
      }
    }

    if (percentageEmotions >= percentage || consecutiveEmotions >= requiredConsecutiveEmotions) {
      Alert.alert('Resultado', 'Expresion correcta', [{ text: 'OK' }]);
      // Navegar a pantalla recompensa
    } else {
      Alert.alert('Resultado', 'Expresion incorrecta', [{ text: 'OK' }]);
      // Navegar a pantalla con recomendaciones
    }
  };

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
    if (predictions && predictions.length === predictionsCant) {
      analyzeEmotion(predictions);
    } else {
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
        emotion={emotion}
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
            bg="white"
            rounded={16}
            onPress={() => setUserReady(true)}>
            <Text fontSize={32}>Estoy listo!</Text>
          </Button>
        ) : !finishedCountDown ? (
          <Countdown
            duration={3}
            size={40}
            color='#ff00ff'
            onFinished={() => setFinishedCountDown(true)}
          />
        ) : (
          <Text fontSize={32} color="#ff00ff">Ya!</Text>
        )}
      </View>
      {response && (
        <Text fontSize={32} color="#ff00ff">
          {JSON.stringify(response)}
        </Text>
      )}
    </View>
  );
};

export default PerformEmotionScreen;