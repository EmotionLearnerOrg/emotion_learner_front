import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {makeLoginScreenStyle} from './LoginScreen.style';
import {HomeLoginType, LoginRoutes} from '../../stacks/LoginParams';
import {useUserAuth} from '../../contexts';
import {useLoginWithEmailAndPassword} from '../../hooks';
import {Button, Text} from 'react-native-magnus';
import {Control, FieldValues, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {SchemaOf} from 'yup';
import {validations} from '../../utils/formValidations/validations';
import {FormInput, ModalPasswordReset} from '../../components';

export type LoginForm = {
  email: string;
  password: string;
};

const LoginScreen: FC<HomeLoginType> = ({navigation}) => {
  const style = makeLoginScreenStyle();
  const {initData} = useUserAuth();
  const cleanData = () => {
    reset();
  };
  const handleLogin = async () => {
    await initData();
    cleanData();
    goToHome();
  };
  const {
    mutateAsync: mutateLoginWithEmailAndPassword,
    isLoading: isLoadingLoginWithEmailAndPassword,
  } = useLoginWithEmailAndPassword({onSuccess: handleLogin});

  const schema: SchemaOf<LoginForm> = yup.object().shape({
    email: validations().email.required(),
    password: validations().string.required(),
  });

  const {
    control,
    formState: {isValid, errors},
    getValues,
    reset,
  } = useForm<LoginForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const goToRegister = () => {
    navigation.navigate(LoginRoutes.REGISTER);
  };
  const goToHome = () => {
    navigation.replace(LoginRoutes.HOME_APP);
  };

  const controlMsgErrors = (errMsg: string) => {
    switch (errMsg) {
      case 'email':
        return errors.email;
      case 'password':
        return errors.password;
      default:
        return undefined;
    }
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [messageModal, setMessageModal] = useState('');

  const handlePasswordReset = () => {
    setTitleModal('Recuperar contraseña');
    setMessageModal('Ingrese su correo:');
    setModalVisible(true);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Iniciá sesión para comenzar a jugar</Text>
      <FormInput
        name={'email'}
        control={control as unknown as Control<FieldValues>}
        error={controlMsgErrors('email')}
        placeholder="Email"
        label="Email"
      />
      <FormInput
        name={'password'}
        control={control as unknown as Control<FieldValues>}
        error={controlMsgErrors('password')}
        passwordInput
        placeholder="Contraseña"
        label="Contraseña"
      />
      <Button
        style={style.button}
        alignSelf="center"
        bg="#FCCDCE"
        mx={10}
        mb={12}
        rounded={16}
        disabled={!isValid}
        loading={isLoadingLoginWithEmailAndPassword}
        onPress={() => {
          mutateLoginWithEmailAndPassword({
            email: getValues('email'),
            password: getValues('password'),
          });
        }}>
        <Text style={style.buttonText}>Ingresar</Text>
      </Button>
      <Text
        style={{
          color: '#0D0140',
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: 20,
          marginBottom: 20,
        }}>
        ¿Olvidaste tu Contraseña?
      </Text>
      <Button
        style={style.button}
        alignSelf="center"
        bg="#FCCDCE"
        mx={10}
        rounded={16}
        onPress={handlePasswordReset}>
        <Text style={style.buttonText}>Recuperar contraseña</Text>
      </Button>
      <Text
        style={{
          color: '#0D0140',
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: 20,
          marginBottom: 20,
        }}>
        ¿No tenes cuenta?
      </Text>
      <Button
        style={style.button}
        alignSelf="center"
        bg="#FCCDCE"
        mx={10}
        rounded={16}
        onPress={goToRegister}>
        <Text style={style.buttonText}>Registrarse</Text>
      </Button>
      <ModalPasswordReset
        isModalVisible={isModalVisible}
        title={titleModal}
        message={messageModal}
        setModalVisible={() => setModalVisible(false)}
      />
    </View>
  );
};

export default LoginScreen;
