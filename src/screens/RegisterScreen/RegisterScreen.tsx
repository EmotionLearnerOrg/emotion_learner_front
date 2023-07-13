import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {signUpWithEmailAndPassword} from '../../services';
import {makeRegisterScreenStyle} from './RegisterScreen.style';
import {LoginRoutes, RegisterType} from '../../stacks/LoginParams';
import {Input} from '@rneui/base';
import {InputPassword} from '../../components';

const RegisterScreen: FC<RegisterType> = ({navigation}) => {
  const style = makeRegisterScreenStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');

  const handleRegister = async () => {
    // Aquí puedes acceder a las variables 'email' y 'password' que contienen los valores ingresados

    try {
      await signUpWithEmailAndPassword({email, password, nickName});
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
