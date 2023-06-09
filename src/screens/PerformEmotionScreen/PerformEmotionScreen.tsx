import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-magnus';
import { makeRuletaScreenStyles } from './PerformEmotionScreen.style';
import { CameraComponent } from '../../components/Camera';
import { Camera } from 'react-native-vision-camera';
import { useAuthorizedCamera } from '../../components/Camera/useAuthorizedCamera';
import { PerformEmotionType } from '../../stacks/HomeParams';
import RNFS from 'react-native-fs';

const PerformEmotionScreen: FC<PerformEmotionType> = ({ route }) => {
  const { emotion } = route.params;
  const style = makeRuletaScreenStyles();
  const cameraRef = useRef<Camera>(null);
  const { isAuthorized, requestCameraPermission } = useAuthorizedCamera();
  const [imageBase64, setImageBase64] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [response, setResponse] = useState(Object);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

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
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          console.log('Error: ', error);
          reject(null);
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
      console.log('Imagen Obtenida');
      detectEmotionsApi(imageBase64).then(predict => {
        const parsedJson = JSON.parse(JSON.stringify(predict));
        const { emotions } = parsedJson;
        console.log(emotions);
        setResponse(emotions);
        setRefresh(!refresh);
      });
    }
  }, [imageBase64]);

  useEffect(() => {
    if (isInitialized) {
      takePicture();
    }
  }, [isInitialized, takePicture]);

  useEffect(() => {
    takePicture();
  }, [refresh]);

  return (
    <View style={style.containerView}>
      <CameraComponent
        emotion={emotion}
        ref={cameraRef}
        cameraPosition={'front'}
        isAuthorized={isAuthorized}
        requestCameraPermission={requestCameraPermission}
        setIsInitialized={setIsInitialized}
      />
      {response && (
        <Text fontSize={32} color="#ff00ff">
          {JSON.stringify(response)}
        </Text>
      )}
    </View>
  );
};

export default PerformEmotionScreen;
