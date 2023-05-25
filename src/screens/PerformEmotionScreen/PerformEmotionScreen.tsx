import React, {useRef} from 'react';
import {View} from 'react-native';
import {makeRuletaScreenStyles} from './PerformEmotionScreen.style';
import {CameraComponent} from '../../components/Camera';
import {Camera} from 'react-native-vision-camera';
import {useAuthorizedCamera} from '../../components/Camera/useAuthorizedCamera';

const PerformEmotionScreen = () => {
  const style = makeRuletaScreenStyles();
  const cameraRef = useRef<Camera>(null);
  const {isAuthorized, requestCameraPermission} = useAuthorizedCamera();

  return (
    <View style={style.containerView}>
      <CameraComponent
        ref={cameraRef}
        cameraPosition={'front'}
        isAuthorized={isAuthorized}
        requestCameraPermission={requestCameraPermission}
      />
    </View>
  );
};

export default PerformEmotionScreen;
