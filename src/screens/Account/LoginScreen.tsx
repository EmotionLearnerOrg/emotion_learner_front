import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {loginWithEmailAndPassword} from '../../services/account/account.service';
import {makeAccountScreensStyle} from './AccountScreens.style';
import {HomeLoginType, LoginRoutes} from '../../stacks/LoginParams';
import InputPassword from '../../components/InputPassword/InputPassword';
import {Input} from '@rneui/base';

const LoginScreen: FC<HomeLoginType> = ({navigation}) => {
  const style = makeAccountScreensStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cleanData = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    try {
      const result = await loginWithEmailAndPassword(email, password);
      console.log('Inicio correcto: ', result);
      cleanData();
      goToHome();
    } catch (error) {
      Alert.alert('Error', 'Usuario o contraseña incorrectos', [{text: 'OK'}]);
    }
  };

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
