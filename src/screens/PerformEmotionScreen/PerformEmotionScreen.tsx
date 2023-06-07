import React, { FC, useEffect, useRef, useState } from 'react';
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
  const [imageBase64, setImageBase64] = useState("");
  const [loading, setloading] = useState(true);
  const [response, setResponse] = useState(Object);

  useEffect(() => {
    console.log("starting");
    // TODO -- NO carga al inicio, hay que hacer una carga manual para que arranque 
    takePicture();
  }, []);

  useEffect(() => {
    takePicture();
  }, [loading]);

  useEffect(() => {
    if (imageBase64 && imageBase64 !== "") {
      console.log("Imagen Obtenida");
      detectEmotionsApi(imageBase64).
        then((predict) => {
          const parsedJson = JSON.parse(JSON.stringify(predict));
          const { emotions } = parsedJson;
          console.log(emotions);
          setResponse(emotions);

          setloading(!loading);
        });
    }
  }, [imageBase64]);

  const takePicture = async () => {
    try {
      if (isAuthorized && cameraRef.current) {
        const image = await cameraRef.current.takePhoto();
        if (image && image.path) {
          const base64 = await RNFS.readFile(image.path, 'base64');
          setImageBase64(base64);
        }
        else {
          console.error("Error al capturar la imagen");
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const detectEmotionsApi = (imageData: string) => {
    const url = 'http://192.168.0.21:3001/detect-emotion';
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
      }).then((response) => response.json())
        .then((data) => { resolve(data); })
        .catch((error) => {
          console.log('Error: ', error);
          reject(null);
        });
    });
  };

  return (
    <View style={style.containerView}>
      <CameraComponent
        emotion={emotion}
        ref={cameraRef}
        cameraPosition={'front'}
        isAuthorized={isAuthorized}
        requestCameraPermission={requestCameraPermission}
      />
      {response && (
        <Text fontSize={32} color='#ff00ff'>{JSON.stringify(response)}</Text>
      )}
    </View>
  );
};

export default PerformEmotionScreen;