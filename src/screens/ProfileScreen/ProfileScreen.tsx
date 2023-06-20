import React, {FC, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {makeProfileScreenStyles} from './ProfileScreen.style';
import {Button, Text} from 'react-native-magnus';
import {TouchableOpacity} from 'react-native';
import {logout} from '../../services/account/account.service';
import {ProfileType} from '../../stacks/HomeParams';
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
    navigation.popToTop();
  };

  return (
    <ScrollView style={style.containerView}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text>Cerrar sesion</Text>
      </TouchableOpacity>
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
