import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-magnus';
import {makePerformEmotionScreenStyles} from './PerformEmotionScreen.style';
import {Camera} from 'react-native-vision-camera';
import {useAuthorizedCamera, CameraComponent} from '../../components';
import {HomeRoutes, PerformEmotionType} from '../../stacks/HomeParams';
import RNFS from 'react-native-fs';
import Countdown from './CountDown';
import {useUserData} from '../../contexts';
import {insigniasEnum} from '../../types';
import axios from 'axios';
import SpinningEmotion from './SpinningEmotion';

interface EmotionResponse {
  consecutive_recognition: number;
  emotion_prediction: string;
  reliability: number;
  results: Record<string, string>;
  success: boolean;
}

const PerformEmotionScreen: FC<PerformEmotionType> = ({route, navigation}) => {
  const {emotion: emotionParam, type} = route.params;
  const {urlApi: urlApi} = useUserData();
  const style = makePerformEmotionScreenStyles();
  const cameraRef = useRef<Camera>(null);
  const {isAuthorized, requestCameraPermission} = useAuthorizedCamera();
  const [information, setInformation] = useState('');
  const [finishedCountDown, setFinishedCountDown] = useState(false);
  const [userReady, setUserReady] = useState(false);
  const [startDetectionEmotion, setStartDetectionEmotion] = useState(false);
  const {updateInsignias} = useUserData();
  const percentage = '49'; // Porcentaje minimo de aciertos (Primer criterio de aceptacion)
  const consecutiveRecognitionSuccess = '1'; // Cantidad de aciertos consecutivos (Segundo criterio de aceptacion)
  const numImagesToCapture = 2; // Cantidad de fotos para el muestreo
  let pathsImages = ['']; // Solo se usa para almacenar el path de la imagen para eliminarla despues del proceso
  const [procesando, setProcesando] = useState(false);
  const navigateToFeedback = useCallback(
    (detection: boolean) => {
      if (detection) {
        if (type === 'Arcade') {
          navigation.replace(HomeRoutes.ASOCIATION, {
            emotion: emotionParam,
            type,
          });
        } else {
          // Ruleta y Mirror
          updateInsignias({
            idInsignia:
              `${type}_${emotionParam.name}` as unknown as insigniasEnum,
          });
          navigation.replace(HomeRoutes.FEEDBACK_POS_MIRROR_RULETA, {
            emotion: emotionParam,
            type,
          });
        }
      } else {
        if (type === 'Arcade') {
          navigation.replace(HomeRoutes.FEEDBACK_NEG_ARCADE, {
            emotion: emotionParam,
            type,
          });
        } else {
          navigation.replace(HomeRoutes.FEEDBACK_NEG_MIRROR_RULETA, {
            emotion: emotionParam,
            type,
          });
        }
      }
    },
    [emotionParam, navigation, type, updateInsignias],
  );

  const takePicture = useCallback(async () => {
    try {
      if (isAuthorized && cameraRef.current) {
        const image = await cameraRef.current.takeSnapshot({
          quality: 30,
          flash: 'off',
          skipMetadata: true,
        });
        if (image && image.path) {
          return image;
        } else {
          console.error('Error al capturar la imagen');
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [isAuthorized]);

  const getFormData = async () => {
    const formData = new FormData();
    formData.append('percentage', percentage);
    formData.append(
      'consecutiveRecognitionSuccess',
      consecutiveRecognitionSuccess,
    );
    formData.append('emotionPrediction', emotionParam.name);

    for (let i = 0; i < numImagesToCapture; i++) {
      let image = await takePicture();
      if (image && image.path) {
        formData.append('images', {
          uri: `file://${image.path}`,
          type: `image/${image.path.split('.').pop()}`,
          name: image.path.split('/').pop(),
        });
        pathsImages.push(image.path);
      }
      // 1 segundo de delay entre cada foto
      await new Promise<void>(resolve => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }
    return formData;
  };

  const detectEmotionsApi = async (formData: FormData) => {
    const url = urlApi!; // Reemplazar hardcodeado si no funcion al updateUrlApi
    // const url = 'https://cod-proven-formally.ngrok-free.app/detect-emotion';
    // const url = 'https://api-emotion-recognition-ia-dbcgar3efa-uc.a.run.app/detect-emotion';
    // const url = 'https://many-sole-solely.ngrok-free.app/detect-emotion';
    // const url = 'http://192.168.0.101:3001/detect-emotion';
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data: EmotionResponse = response.data;
      return data;
    } catch (error) {
      console.error('Error al enviar la imagen: ' + error);
      throw error;
    }
  };

  // Hay que mejorar la eliminacion, estaria bueno que se obtenga los path desde formData pero no lo consegui facil
  const deleteImagesInFormData = async (formData: FormData) => {
    for (const path of pathsImages) {
      try {
        await RNFS.unlink(path);
      } catch {
        // Negrada para que no explote si no existe la url
      }
    }
  };

  const startProcess = async () => {
    setInformation('Comienza el muestreo');
    const formData = await getFormData();
    setProcesando(true);
    setInformation('Procesando');
    let response = await detectEmotionsApi(formData);
    await deleteImagesInFormData(formData);
    setProcesando(false);
    navigateToFeedback(response.success);
  };

  useEffect(() => {
    if (startDetectionEmotion) {
      startProcess();
    }
  }, [startDetectionEmotion]);

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
        userReady={userReady}
      />
      <View style={style.containerButton}>
        {!userReady ? (
          <Button
            style={style.button}
            opacity={0.5}
            bg="#56CD54"
            rounded={16}
            onPress={() => setUserReady(true)}>
            <Text color="black" fontSize={32}>
              ¡Estoy listo!
            </Text>
          </Button>
        ) : !finishedCountDown ? (
          <Countdown
            duration={0}
            size={40}
            color="#FF00FF"
            onFinished={() => setFinishedCountDown(true)}
          />
        ) : procesando ? null : (
          <Text style={style.text}>¡Ya!</Text>
        )}
      </View>
      <>
        {procesando && <View style={style.processingOverlay} />}
        {procesando && <SpinningEmotion emotionParam={emotionParam} />}
        {/* {information && <Text style={style.text}>{information}</Text>} */}
      </>
    </View>
  );
};

export default PerformEmotionScreen;
