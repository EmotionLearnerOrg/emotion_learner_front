import React, { FC, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { makeProfileScreenStyles } from './ProfileScreen.style';
import { Button } from 'react-native-magnus';
import { HomeRoutes, ProfileType } from '../../stacks/HomeParams';
import { Dialog } from '@rneui/themed';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { HeaderCommon } from '../../components';
import { Input } from '@rneui/base';
import { useUserAuth } from '../../contexts';
import { logout } from '../../services';

const ProfileScreen: FC<ProfileType> = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { getParent } = useNavigation();
  const style = makeProfileScreenStyles();
  const { nickName, updateNickname, clearData } = useUserAuth();
  const [newNickname, setNewNickName] = useState(nickName);

  const cleanData = () => {
    setNewNickName('');
  };

  const handleNewNickname = async () => {
    try {
      updateNickname({ nickNameProp: newNickname });
      cleanData();
    } catch (error) {
      Alert.alert('Error', 'Error al guardar el nuevo nickName', [{ text: 'OK' }]);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      clearData();
      const parent = getParent();
      if (parent) {
        parent.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: parent.getState().routeNames[0] }],
          }),
        );
      }
      goToHome();
    } catch (error) {
      Alert.alert('Error', 'Usuario o contraseña incorrectos', [{ text: 'OK' }]);
    }
  };

  const goToHome = () => {
    navigation.navigate(HomeRoutes.LOG_IN);
  };

  return (
    <ScrollView style={style.containerView}>
      <View style={style.cardProfile}>
        <View style={style.cardProfileHeader}>
          <Text style={style.nickname}>{nickName}</Text>
          <HeaderCommon />
        </View>
        <Text style={style.subtitle}>Editá tu perfil</Text>
        <View style={style.cardEditProfile}>
          <Text style={style.subtitle}>Nombre y Apellido</Text>
          <Input
            style={style.input}
            placeholder={nickName}
            placeholderTextColor="#AEB6BF"
            onChangeText={setNewNickName}
            value={newNickname}
          />
          <Button
            onPress={handleNewNickname}>
            Guardar nuevo nickname
          </Button>
        </View>
      </View>
      <View style={style.cardPayment}>
        <Text>Tu subscripción actual es:</Text>
        <View style={style.line} />
        <Text>Prueba gratis por 30 días</Text>
      </View>
      <View style={style.cardPayment}>
        <Text>Premium anual -  30 u$s / año</Text>
        <View style={style.line} />
        <Text>Premium mensual - 2,5 u$s / mes</Text>
        <Button
          m={10}
          block
          onPress={() => { }}>
          Continuar con el pago
        </Button>
      </View>
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
