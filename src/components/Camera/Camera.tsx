import {StyleSheet, View, TouchableOpacity} from 'react-native';
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
import {makeStyles} from './Camera.styles';
import {Button, Text} from 'react-native-magnus';

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
};

/**
 * @protected
 */
export const CameraComponent: ForwardRefExoticComponent<
  CameraProps & RefAttributes<CameraBase>
> = forwardRef<CameraBase, CameraProps>(
  ({cameraPosition = 'back', isAuthorized, requestCameraPermission}, ref) => {
    const styles = makeStyles();
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
        />
        <View style={styles.containerButton}>
          <Button style={styles.button} opacity={1} bg="green" rounded={16}>
            <Text>Estoy listo</Text>
          </Button>
        </View>
      </>
    ) : (
      <TouchableOpacity
        style={styles.allowButton}
        onPress={requestCameraPermission}>
        <Text>dale a los permisos</Text>
      </TouchableOpacity>
    );
  },
);
