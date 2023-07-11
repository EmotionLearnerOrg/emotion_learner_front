import React, {FC, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {makeProfileScreenStyles} from './ProfileScreen.style';
import {Button} from 'react-native-magnus';
import {HomeRoutes, ProfileType} from '../../stacks/HomeParams';
import {Dialog} from '@rneui/themed';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useUserData} from '../../contexts/UserDataProvider';
import {logout} from '../../services';

const ProfileScreen: FC<ProfileType> = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const {getParent} = useNavigation();
  const style = makeProfileScreenStyles();
  const {clearData} = useUserData();

  const handleLogout = async () => {
    try {
      await logout();
      clearData();
      const parent = getParent();
      if (parent) {
        parent.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: parent.getState().routeNames[0]}],
          }),
        );
      }
      goToHome();
    } catch (error) {
      Alert.alert('Error', 'Usuario o contraseña incorrectos', [{text: 'OK'}]);
    }
  };

  const goToHome = () => {
    navigation.navigate(HomeRoutes.LOG_IN);
  };

  return (
    <ScrollView style={style.containerView}>
      <Button
        block
        m={10}
        onPress={() => {
          setVisible(true);
        }}>
        Cerrar sesion
      </Button>
      <Dialog isVisible={visible}>
        <Dialog.Title
          titleStyle={style.dialogTitle}
          title={'Seguro que deseas cerrar sesion?'}
        />
        <Button
          block
          m={10}
          onPress={() => {
            setVisible(false);
          }}>
          No
        </Button>
        <Button
          block
          m={10}
          onPress={() => {
            setVisible(false);
            handleLogout();
          }}>
          Si
        </Button>
      </Dialog>
    </ScrollView>
  );
};

export default ProfileScreen;
