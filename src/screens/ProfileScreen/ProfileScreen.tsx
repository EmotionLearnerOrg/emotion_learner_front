import React, {FC, useState} from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {makeProfileScreenStyles} from './ProfileScreen.style';
import {Button, Icon} from 'react-native-magnus';
import {HomeRoutes, ProfileType} from '../../stacks/HomeParams';
import {Dialog} from '@rneui/themed';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {FormInput, HeaderCommon, PaymentSection} from '../../components';
import {Input} from '@rneui/base';
import {useUserAuth, useUserData} from '../../contexts';
import {logout} from '../../services';
import {validations} from '../../utils/formValidations/validations';
import * as yup from 'yup';
import {SchemaOf} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Control, FieldValues, useForm} from 'react-hook-form';

export type EditNicknameForm = {
  nickName: string;
};

const ProfileScreen: FC<ProfileType> = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [visibleUrl, setVisibleUrl] = useState(false);
  const {getParent} = useNavigation();
  const style = makeProfileScreenStyles();
  const {clearData: clearUserData} = useUserAuth();
  const {
    nickName: nickName,
    urlApi: urlApi,
    updateNickname,
    updateUrlApi,
    isLoadingUpdateNickname,
    isLoadingUrlApi,
  } = useUserData();
  // const [newNickname, setNewNickName] = useState(nickName);
  const [newUrlApi, setNewUrlApi] = useState('');

  const cleanData = () => {
    // setNewNickName('');
    setNewUrlApi('');
  };

  const handleNewNickname = () => {
    updateNickname({nickname: getValues('nickName')});
    // cleanData();
    // reset();
  };

  const handleNewUrlApi = () => {
    updateUrlApi({urlApi: newUrlApi!});
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
            routes: [{name: parent.getState().routeNames[0]}],
          }),
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Usuario o contraseña incorrectos', [{text: 'OK'}]);
    }
  };

  const goToHome = () => {
    navigation.replace(HomeRoutes.LOG_IN);
  };

  const schema: SchemaOf<EditNicknameForm> = yup.object().shape({
    nickName: validations()
      .string.min(6, 'Debe tener al menos 6 caracteres')
      .max(15, 'Debe tener como máximo 15 caracteres'),
  });

  const controlMsgErrors = (errMsg: string) => {
    switch (errMsg) {
      case 'nickName':
        return errors.nickName;
      default:
        return undefined;
    }
  };

  const {
    control,
    formState: {isValid, errors},
    getValues,
    reset,
  } = useForm<EditNicknameForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      nickName: nickName,
    },
  });

  return (
    <ScrollView style={style.containerView}>
      <View style={style.cardProfile}>
        <View style={style.cardProfileHeader}>
          <Text style={style.nickname}>{nickName}</Text>
          <HeaderCommon />
        </View>
        <Text style={style.subtitle}>Editá tu perfil</Text>
        <View style={style.cardEditProfile}>
          <FormInput
            name={'nickName'}
            control={control as unknown as Control<FieldValues>}
            error={controlMsgErrors('nickName')}
            placeholder="NickName"
            label="NickName"
            labelColor='white'
          />
          <Button
            loading={isLoadingUpdateNickname}
            style={style.button}
            disabled={!isValid}
            alignSelf="center"
            bg="#FCCDCE"
            mx={10}
            mb={12}
            rounded={16}
            onPress={handleNewNickname}>
            <Text style={style.buttonText}>Guardar NickName</Text>
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
          title={'¿Seguro que deseas cerrar sesión?'}
        />
        <Button
          style={style.button}
          alignSelf="center"
          bg="#FCCDCE"
          mx={10}
          mb={12}
          rounded={16}
          block
          onPress={() => {
            setVisible(false);
          }}>
          <Text style={style.buttonText}>No</Text>
        </Button>
        <Button
          style={style.button}
          alignSelf="center"
          bg="#FCCDCE"
          mx={10}
          mb={12}
          rounded={16}
          block
          onPress={async () => {
            setVisible(false);
            await handleLogout();
          }}>
          <Text style={style.buttonText}>Si</Text>
        </Button>
      </Dialog>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <TouchableOpacity
        onPress={() => {
          setVisibleUrl(true);
        }}>
        <Icon
          name="cog"
          color="#rgba(255, 255, 255, 0.3)"
          fontSize={30}
          right={4}
          fontFamily="FontAwesome"
        />
      </TouchableOpacity>
      <Dialog isVisible={visibleUrl}>
        <Input
          style={{marginTop: 10, color: 'black'}}
          placeholderTextColor="black"
          value={urlApi}
          disabled={false}
        />
        <Input
          style={{marginTop: 10, color: 'black'}}
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
          onPress={() => {
            handleNewUrlApi();
          }}>
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
          onPress={() => {
            setVisibleUrl(false);
          }}>
          <Text style={style.buttonText}>Cancelar</Text>
        </Button>
      </Dialog>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
    </ScrollView>
  );
};

export default ProfileScreen;
