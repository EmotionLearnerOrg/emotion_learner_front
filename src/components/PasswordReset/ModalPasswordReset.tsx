import React, { FC, useState } from 'react';
import Modal from 'react-native-modal';
import { makeModalPasswordResetStyles } from './ModalPasswordReset.style';
import { Alert, Text, View } from 'react-native';
import { Button } from 'react-native-magnus';
import { Input } from '@rneui/base';
import { sendPassResetEmail } from '../../services';

interface ModalPasswordResetProps {
    isModalVisible: boolean;
    title: string;
    message: string;
    setModalVisible: (isModalVisible: boolean) => void;
}

const ModalPayment: React.FC<ModalPasswordResetProps> = ({ isModalVisible, title, message, setModalVisible }) => {
    const style = makeModalPasswordResetStyles();
    const [email, setEmail] = useState('');
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={style.modal}
            backdropOpacity={0.5}
            useNativeDriver={true}>
            <View style={style.modalContent}>
                <Text style={style.modalTitle}>{title}</Text>
                <Text style={style.modalMessage}>{message}</Text>
                <Input
                    style={{ color: 'black' }}
                    placeholder='Email'
                    placeholderTextColor="#AEB6BF"
                    onChangeText={setEmail}
                    value={email}
                />
                <Button
                    style={style.button}
                    alignSelf="center"
                    bg="#FCCDCE"
                    mx={10}
                    mb={12}
                    rounded={16}
                    disabled={!email}
                    onPress={async () => {
                        try {
                            await sendPassResetEmail({ email: email });
                            Alert.alert('Correo enviado', 'Se ha enviado un correo de restablecimiento de contraseña a tu dirección de email.');
                        } catch (error) {
                            Alert.alert('Error', 'No se pudo enviar el correo de restablecimiento de contraseña. Verifica tu dirección de email.');
                            console.log('Error sendPasswordResetEmail: ', error);
                        }
                    }}>
                    <Text style={style.buttonText}>Enviar correo</Text>
                </Button>
            </View>
        </Modal>
    );
}

export default ModalPayment;