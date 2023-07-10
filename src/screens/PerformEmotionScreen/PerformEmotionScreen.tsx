import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { makeRuletaScreenStyles } from './PerformEmotionScreen.style';
import { CameraComponent } from '../../components/Camera';
import { Camera } from 'react-native-vision-camera';
import { useAuthorizedCamera } from '../../components/Camera/useAuthorizedCamera';
import { PerformEmotionType, HomeRoutes } from '../../stacks/HomeParams';
import { makeStyles } from './../../components/Camera/Camera.styles';
import RNFS from 'react-native-fs';
import Countdown from './CountDown';

const PerformEmotionScreen: FC<PerformEmotionType> = ({ route, navigation }) => {
  const { emotion } = route.params;
  const style = makeRuletaScreenStyles();
  const cameraRef = useRef<Camera>(null);
  const { isAuthorized, requestCameraPermission } = useAuthorizedCamera();
  const [imageBase64, setImageBase64] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [response, setResponse] = useState(Object);
  const [finishedCountDown, setFinishedCountDown] = useState(false);
  const [userReady, setUserReady] = useState(false);
  const [startDetectionEmotion, setStartDetectionEmotion] = useState(false);

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
  const styles = makeStyles();

  useEffect(() => {
    if (imageBase64 && imageBase64 !== '') {
      detectEmotionsApi(imageBase64).then(predict => {
        const parsedJson = JSON.parse(JSON.stringify(predict));
        const { emotions } = parsedJson;
        setResponse(emotions);
        setRefresh(!refresh);
      });
    }
  }, [imageBase64, refresh]);

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
      <View style={styles.containerButton}>
        {!userReady ? (
          <Button
            style={styles.button}
            opacity={0.5}
            bg="white"
            rounded={16}
            onPress={() => setUserReady(true)}>
            <Text fontSize={32}>Estoy listo!</Text>
          </Button>
        ) : !finishedCountDown ? (
          <Countdown
            duration={5}
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
      {/*Botones de prueba*/}
      <View style={styles.containerButton}>
        <Button
          onPress={() =>
            navigation.navigate(HomeRoutes.FEEDBACK_POS, {emotion})
          }>
          Feedback Positivo
        </Button>
        <Button
          onPress={() =>
            navigation.navigate(HomeRoutes.FEEDBACK_NEG, {emotion})
          }>
          Feedback Negativo
        </Button>
      </View>
    </View>
  );
};

export default PerformEmotionScreen;
