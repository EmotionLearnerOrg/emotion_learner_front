import React, {FC, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {signUpWithEmailAndPassword} from '../../services/account/account.service';
import {makeAccountScreensStyle} from './AccountScreens.style';
import {LoginRoutes, RegisterType} from '../../stacks/LoginParams';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputPassword from '../../components/InputPassword/InputPassword';
import {Input} from '@rneui/base';

const RegisterScreen: FC<RegisterType> = ({navigation}) => {
  const style = makeAccountScreensStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');

  const handleRegister = async () => {
    // Aquí puedes acceder a las variables 'email' y 'password' que contienen los valores ingresados
    console.log('Email: ', email);
    console.log('Contraseña: ', password);
    console.log('NickName: ', nickName);

    try {
      const result = await signUpWithEmailAndPassword(
        email,
        password,
        nickName,
      );
      console.log('Registro correcto: ', result);
      goToLogin();
    } catch (error) {
      Alert.alert('Error', 'Registro Incorrecto', [{text: 'OK'}]);
    }
  };

  const goToLogin = () => {
    navigation.navigate(LoginRoutes.HOME_LOGIN);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Registrarse</Text>

      <Input
        style={style.input}
        placeholder="NickName"
        placeholderTextColor="#AEB6BF"
        onChangeText={setNickName}
        value={nickName}
      />

      <Input
        style={style.input}
        placeholder="Usuario"
        placeholderTextColor="#AEB6BF"
        onChangeText={setEmail}
        value={email}
      />
      <InputPassword setPassword={setPassword} password={password} />

      <TouchableOpacity style={style.button} onPress={handleRegister}>
        <Text style={style.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
