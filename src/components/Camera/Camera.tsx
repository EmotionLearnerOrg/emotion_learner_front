import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
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
  // setIsInitialized?: Dispatch<SetStateAction<boolean>>;
  userReady: boolean;
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
      // setIsInitialized,
      userReady,
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

    return (
      <>
        {currentDevice ? (
          <>
            <CameraBase
              ref={ref}
              style={StyleSheet.absoluteFill}
              photo={true}
              isActive={true}
              device={currentDevice}
              onInitialized={() => setIsInitialized?.(true)}
            />
            <Text style={{textAlign: 'center', fontSize: 32, marginTop: 10}}>
              {emotion.displayname}
            </Text>
            {!userReady && (
              <Text
                opacity={0.5}
                bg="#56CD54"
                fontSize={18}
                style={{textAlign: 'center', marginTop: 10}}>
                Cuando estes listo, presioná el botón y realiza la expresión
                seleccionada
              </Text>
            )}
          </>
        ) : isAuthorized ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={requestCameraPermission}>
            <Text>Dale a los permisos</Text>
          </TouchableOpacity>
        )}
      </>
    );
  },
);

export default CameraComponent;
