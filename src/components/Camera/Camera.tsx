import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {
  Dispatch,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  Camera as CameraBase,
  CameraDevice,
  CameraPosition,
  useCameraDevices,
} from 'react-native-vision-camera';
import 'react-native-reanimated';
import {makeCameraStyles} from './Camera.styles';
import {Text} from 'react-native-magnus';
import {emocionType} from '../RuletaContainer/emociones';

type CameraProps = {
  cameraPosition?: CameraPosition;
  children?: {
    topRight?: ReactNode;
    topLeft?: ReactNode;
    bottomRight?: ReactNode;
    bottomLeft?: ReactNode;
    full?: ReactNode;
  };
  isAuthorized?: boolean;
  requestCameraPermission?: any;
  emotion: emocionType;
  setIsInitialized?: Dispatch<SetStateAction<boolean>>;
};

/**
 * @protected
 */
const CameraComponent: ForwardRefExoticComponent<
  CameraProps & RefAttributes<CameraBase>
> = forwardRef<CameraBase, CameraProps>(
  (
    {
      cameraPosition = 'back',
      isAuthorized,
      requestCameraPermission,
      emotion,
      setIsInitialized,
    },
    ref,
  ) => {
    const styles = makeCameraStyles();
    const devices = useCameraDevices();

    const [currentDevice, setCurrentDevice] = useState<
      CameraDevice | undefined
    >();

    useEffect(() => {
      requestCameraPermission();
    }, [requestCameraPermission]);

    useEffect(() => {
      if (isAuthorized && (devices.front || devices.back)) {
        const availableDevices = Object.keys(devices).filter(
          (deviceKey: string) => {
            return (
              (deviceKey === 'front' || deviceKey === 'back') &&
              devices[deviceKey]
            );
          },
        );
        if (availableDevices.includes('front') && cameraPosition === 'front') {
          setCurrentDevice(devices.front);
          return;
        }
        if (availableDevices.includes('back') && cameraPosition === 'back') {
          setCurrentDevice(devices.back);
          return;
        }
        if (availableDevices.includes('front')) {
          setCurrentDevice(devices.front);
        } else {
          setCurrentDevice(devices.back);
        }
      }
    }, [isAuthorized, devices, cameraPosition]);

    return currentDevice ? (
      <>
        <CameraBase
          ref={ref}
          style={StyleSheet.absoluteFill}
          photo={true}
          isActive={true}
          device={currentDevice}
          onInitialized={() => setIsInitialized && setIsInitialized(true)}
        />
        <Text fontSize={32}>Emocion : {emotion.name}</Text>
      </>
    ) : (
      <TouchableOpacity style={styles.button} onPress={requestCameraPermission}>
        <Text>dale a los permisos</Text>
      </TouchableOpacity>
    );
  },
);

export default CameraComponent;
