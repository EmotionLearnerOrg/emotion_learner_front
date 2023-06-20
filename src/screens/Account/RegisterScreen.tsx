import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signUpWithEmailAndPassword } from '../../services/account/account.service';
import { makeAccountScreensStyle } from './AccountScreens.style';

const RegisterScreen = () => {
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
            const result = await signUpWithEmailAndPassword(email, password, nickName);
            console.log('Registro correcto: ', result);
        } catch (error) {
            Alert.alert('Error', 'Registro Incorrecto', [{ text: 'OK' }]);
        }
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>Registrarse</Text>

            <TextInput
                style={style.input}
                placeholder="NickName"
                placeholderTextColor="#AEB6BF"
                onChangeText={setNickName}
                value={nickName}
            />

            <TextInput
                style={style.input}
                placeholder="Usuario"
                placeholderTextColor="#AEB6BF"
                onChangeText={setEmail}
                value={email}
            />

            <TextInput
                style={style.input}
                placeholder="Contraseña"
                placeholderTextColor="#AEB6BF"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />

            <TouchableOpacity style={style.button} onPress={handleRegister}>
                <Text style={style.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterScreen;