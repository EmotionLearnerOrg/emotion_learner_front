import {useState} from 'react';
import {
  Camera as CameraBase,
  CameraPermissionRequestResult,
  CameraPermissionStatus,
} from 'react-native-vision-camera';

export const useAuthorizedCamera = () => {
  const [isAuthorized, setAuthorized] = useState(false);

  const requestCameraPermission = async () => {
    const cameraPermission: CameraPermissionStatus =
      await CameraBase.getCameraPermissionStatus();

    if (
      cameraPermission === 'not-determined' ||
      cameraPermission === 'denied'
    ) {
      const newCameraPermission: CameraPermissionRequestResult =
        await CameraBase.requestCameraPermission();

      switch (newCameraPermission) {
        case 'authorized': {
          setAuthorized(true);
          break;
        }
        case 'denied': {
          setAuthorized(false);
          break;
        }
      }
    } else {
      setAuthorized(true);
    }
  };

  return {isAuthorized, requestCameraPermission};
};
