import React, {FC, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {makeProfileScreenStyles} from './ProfileScreen.style';
import {Button} from 'react-native-magnus';
import {logout} from '../../services/account/account.service';
import {HomeRoutes, ProfileType} from '../../stacks/HomeParams';
import {Dialog} from '@rneui/themed';

const ProfileScreen: FC<ProfileType> = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const style = makeProfileScreenStyles();

  const handleLogout = async () => {
    try {
      await logout();
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
          titleStyle={{
            alignSelf: 'center',
          }}
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
