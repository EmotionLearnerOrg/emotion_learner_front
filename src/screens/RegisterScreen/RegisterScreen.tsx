import React, {FC} from 'react';
import {View, Alert} from 'react-native';
import {signUpWithEmailAndPassword} from '../../services';
import {makeRegisterScreenStyle} from './RegisterScreen.style';
import {LoginRoutes, RegisterType} from '../../stacks/LoginParams';
import {Button, Text} from 'react-native-magnus';
import {Control, FieldValues, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {SchemaOf} from 'yup';
import {validations} from '../../utils/formValidations/validations';
import {FormInput} from '../../components';

export type RegisterForm = {
  email: string;
  password: string;
  nickName: string;
};

const RegisterScreen: FC<RegisterType> = ({navigation}) => {
  const style = makeRegisterScreenStyle();
  const handleRegister = async () => {
    try {
      await signUpWithEmailAndPassword({
        email: getValues('email'),
        password: getValues('password'),
        nickName: getValues('nickName'),
      });
      reset();
      goToLogin();
    } catch (error) {
      Alert.alert('Error', 'Registro Incorrecto', [{text: 'OK'}]);
    }
  };

  const goToLogin = () => {
    navigation.navigate(LoginRoutes.HOME_LOGIN);
  };

  const schema: SchemaOf<RegisterForm> = yup.object().shape({
    email: validations().email.required(),
    password: validations().string.required(),
    nickName: validations().string.required(),
  });

  const controlMsgErrors = (errMsg: string) => {
    switch (errMsg) {
      case 'email':
        return errors.email;
      case 'password':
        return errors.password;
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
  } = useForm<RegisterForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      nickName: '',
    },
  });

  return (
    <View style={style.container}>
      <Text style={style.title}>Registrarse</Text>
      <FormInput
        name={'nickName'}
        control={control as unknown as Control<FieldValues>}
        error={controlMsgErrors('nickName')}
        placeholder="NickName"
        label="NickName"
      />
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
        placeholder="Password"
        label="Password"
      />
      <Button
        disabled={!isValid}
        style={style.button}
        alignSelf="center"
        bg="#FCCDCE"
        mx={10}
        rounded={16}
        onPress={handleRegister}>
        <Text style={style.buttonText}>Registrarse</Text>
      </Button>
    </View>
  );
};

export default RegisterScreen;
