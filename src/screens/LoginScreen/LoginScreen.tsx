import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {makeLoginScreenStyle} from './LoginScreen.style';
import {HomeLoginType, LoginRoutes} from '../../stacks/LoginParams';
import {Input} from '@rneui/base';
import {useUserAuth} from '../../contexts';
import {loginWithEmailAndPassword} from '../../services';
import {InputPassword} from '../../components';
import {useLoginWithEmailAndPassword} from '../../hooks/account';

const LoginScreen: FC<HomeLoginType> = ({navigation}) => {
  const style = makeLoginScreenStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {initData} = useUserAuth();
  useLoginWithEmailAndPassword();
  const {
    mutateAsync: mutateLoginWithEmailAndPassword,
    isLoading: isLoadingLoginWithEmailAndPassword,
  } = useLoginWithEmailAndPassword();

  const cleanData = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    mutateLoginWithEmailAndPassword({email, password});
    // try {
    //   await loginWithEmailAndPassword({email, password}).then(() => initData());
    //   cleanData();
    //   goToHome();
    // } catch (error) {
    //   Alert.alert('Error', 'Usuario o contraseña incorrectos', [{text: 'OK'}]);
    // }
  };
  // a
  const goToRegister = () => {
    navigation.navigate(LoginRoutes.REGISTER);
  };
  const goToHome = () => {
    navigation.navigate(LoginRoutes.HOME_APP);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Iniciar Sesión</Text>
      <Input
        style={style.input}
        placeholder="Correo"
        placeholderTextColor="#AEB6BF"
        onChangeText={setEmail}
        value={email}
      />
      <InputPassword setPassword={setPassword} password={password} />
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={goToRegister}>
        <Text style={style.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
