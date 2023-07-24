import React from 'react';
import { makePaymentSectionStyles } from './PaymentSection.style';
import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native-magnus';
import { View } from 'react-native';

const PaymentSection = () => {
    const style = makePaymentSectionStyles();

    return (
        <ScrollView style={style.containerView}>
            <View style={style.cardPayment}>
                <Text>Tu subscripción actual es:</Text>
                <View style={style.line} />
                <Text>Prueba gratis por 30 días</Text>
            </View>
            <View style={style.cardPayment}>
                <Text>Premium anual -  30 u$s / año</Text>
                <View style={style.line} />
                <Text>Premium mensual - 2,5 u$s / mes</Text>
                <Button
                    m={10}
                    block
                    onPress={() => { }}>
                    Continuar con el pago
                </Button>
            </View>
        </ScrollView>
    );
};

export default PaymentSection;
