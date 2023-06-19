import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { loginWithEmailAndPassword } from '../../services/account/account.service';
import { makeAccountScreensStyle } from './AccountScreens.style';

const LoginScreen = () => {
    const style = makeAccountScreensStyle();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Aquí puedes acceder a las variables 'email' y 'password' que contienen los valores ingresados
        console.log('Email: ', email);
        console.log('Contraseña: ', password);

        try {
            const result = await loginWithEmailAndPassword(email, password);
            console.log('Inicio correcto: ', result);
        } catch (error) {
            Alert.alert('Error', 'Usuario o contraseña incorrectos', [{ text: 'OK' }]);
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Iniciar Sesión</Text>

            <TextInput
                style={style.input}
                placeholder="Correo"
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

            <TouchableOpacity style={style.button} onPress={handleLogin}>
                <Text style={style.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;