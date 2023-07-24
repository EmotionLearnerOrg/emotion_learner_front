import React, { FC, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { makeProfileScreenStyles } from './ProfileScreen.style';
import { Button, Icon } from 'react-native-magnus';
import { HomeRoutes, ProfileType } from '../../stacks/HomeParams';
import { Dialog } from '@rneui/themed';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { HeaderCommon, PaymentSection } from '../../components';
import { Input } from '@rneui/base';
import { useUserAuth } from '../../contexts';
import { logout } from '../../services';

const ProfileScreen: FC<ProfileType> = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const { getParent } = useNavigation();
  const style = makeProfileScreenStyles();
  const { nickName, updateNickname, clearData: clearUserData } = useUserAuth();
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
      clearUserData();
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
          <Icon style={style.nickname} rounded="circle" name="user" fontFamily="Feather" fontSize={40} />
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
      {/* <PaymentSection /> */}
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