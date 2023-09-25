import React, { FC, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { makeProfileScreenStyles } from './ProfileScreen.style';
import { Button, Icon } from 'react-native-magnus';
import { HomeRoutes, ProfileType } from '../../stacks/HomeParams';
import { Dialog } from '@rneui/themed';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { HeaderCommon, PaymentSection } from '../../components';
import { Input } from '@rneui/base';
import { useUserAuth, useUserData } from '../../contexts';
import { logout } from '../../services';

const ProfileScreen: FC<ProfileType> = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [visibleUrl, setVisibleUrl] = useState(false);
  const { getParent } = useNavigation();
  const style = makeProfileScreenStyles();
  const { clearData: clearUserData } = useUserAuth();
  const {
    nickName: nickName,
    urlApi: urlApi,
    updateNickname,
    updateUrlApi,
    isLoadingUpdateNickname,
    isLoadingUrlApi
  } = useUserData();
  const [newNickname, setNewNickName] = useState(nickName);
  const [newUrlApi, setNewUrlApi] = useState('');

  const cleanData = () => {
    setNewNickName('');
    setNewUrlApi('');
  };

  const handleNewNickname = () => {
    updateNickname({ nickname: newNickname! });
    cleanData();
  };

  const handleNewUrlApi = () => {
    updateUrlApi({ urlApi: newUrlApi! });
    console.log(newUrlApi);
    setVisibleUrl(false);
    cleanData();
  };

  const handleLogout = async () => {
    try {
      goToHome(); // Redirigir al usuario a la pantalla de inicio de sesión
      await clearUserData();
      await logout(); // Desloguear al usuario después de la redirección
      const parent = getParent();
      if (parent) {
        parent.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: parent.getState().routeNames[0] }],
          }),
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Usuario o contraseña incorrectos', [{ text: 'OK' }]);
    }
  };

  const goToHome = () => {
    navigation.replace(HomeRoutes.LOG_IN);
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
          <View style={style.cardProfileHeader}>
            <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold', marginStart: 13 }}>Nombre y Apellido</Text>
          </View>
          <Input
            style={{ marginTop: 10, color: 'white' }}
            placeholder={nickName}
            placeholderTextColor="#AEB6BF"
            onChangeText={setNewNickName}
            value={newNickname}
          />
          <Button
            loading={isLoadingUpdateNickname}
            style={style.button}
            alignSelf="center"
            bg="#FCCDCE"
            mx={10}
            mb={12}
            rounded={16}
            onPress={() => {
              handleNewNickname();
            }}>
            <Text style={style.buttonText}>Guardar nuevo nickname</Text>
          </Button>
        </View>
      </View>
      <PaymentSection />
      <Button
        style={style.button}
        alignSelf="center"
        bg="#FCCDCE"
        mx={15}
        mb={12}
        rounded={16}
        onPress={() => {
          setVisible(true);
        }}>
        <Text style={style.buttonText}>Cerrar sesión</Text>
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
          onPress={async () => {
            setVisible(false);
            await handleLogout();
          }}>
          Si
        </Button>
      </Dialog>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <TouchableOpacity onPress={() => { setVisibleUrl(true); }}>
        <Icon
          name="cog"
          color="white"
          fontSize={30}
          right={4}
          fontFamily="FontAwesome"
        />
      </TouchableOpacity>
      <Dialog isVisible={visibleUrl}>
        <Input
          style={{ marginTop: 10, color: 'black' }}
          placeholderTextColor="black"
          value={urlApi}
          disabled={false}
        />
        <Input
          style={{ marginTop: 10, color: 'black' }}
          placeholder={newUrlApi}
          placeholderTextColor="black"
          onChangeText={setNewUrlApi}
          value={newUrlApi}
        />
        <Button
          loading={isLoadingUrlApi}
          style={style.button}
          alignSelf="center"
          bg="#FCCDCE"
          mx={10}
          mb={12}
          rounded={16}
          onPress={() => { handleNewUrlApi(); }}>
          <Text style={style.buttonText}>Guardar nueva URL</Text>
        </Button>
        <Button
          loading={isLoadingUrlApi}
          style={style.button}
          alignSelf="center"
          bg="#FCCDCE"
          mx={10}
          mb={12}
          rounded={16}
          onPress={() => { setVisibleUrl(false); }}>
          <Text style={style.buttonText}>Cancelar</Text>
        </Button>
      </Dialog>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
    </ScrollView>
  );
};

export default ProfileScreen;