import React, {FC} from 'react';
import {View} from 'react-native';
import {makeRegisterScreenStyle} from './RegisterScreen.style';
import {LoginRoutes, RegisterType} from '../../stacks/LoginParams';
import {Button, Text} from 'react-native-magnus';
import {Control, FieldValues, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {SchemaOf} from 'yup';
import {validations} from '../../utils/formValidations/validations';
import {FormInput} from '../../components';
import {useSignUpWithEmailAndPassword} from '../../hooks/account';

export type RegisterForm = {
  email: string;
  password: string;
  nickName: string;
};

const RegisterScreen: FC<RegisterType> = ({navigation}) => {
  const handleRegister = () => {
    reset();
    goToLogin();
  };

  const {
    mutateAsync: mutateSignUpWithEmailAndPassword,
    isLoading: isLoadingLoginWithEmailAndPassword,
  } = useSignUpWithEmailAndPassword({onSuccess: handleRegister});
  const style = makeRegisterScreenStyle();

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
        loading={isLoadingLoginWithEmailAndPassword}
        disabled={!isValid}
        style={style.button}
        alignSelf="center"
        bg="#FCCDCE"
        mx={10}
        rounded={16}
        onPress={() =>
          mutateSignUpWithEmailAndPassword({
            email: getValues('email'),
            nickName: getValues('nickName'),
            password: getValues('password'),
          })
        }>
        <Text style={style.buttonText}>Registrarse</Text>
      </Button>
    </View>
  );
};

export default RegisterScreen;
