import React from 'react';
import { makePaymentSectionStyles } from './PaymentSection.style';
import { ScrollView, Text } from 'react-native';
import { Button } from 'react-native-magnus';
import { View } from 'react-native';
import { SubscriptionEnum } from '../../../types/subscripcion';
import { useUserData } from '../../../contexts';

const PaymentSection = () => {
    const style = makePaymentSectionStyles();
    const {
        subscriptionType: subscriptionType,
        updateSubscriptionType,
        isLoadingUpdateSubscriptionType,
    } = useUserData();

    return (
        <ScrollView style={style.containerView}>
            <View style={style.cardPayment}>
                <Text>Tu subscripción actual es:</Text>
                <View style={style.line} />
                <Text>{subscriptionType !== undefined ? SubscriptionEnum[subscriptionType] : SubscriptionEnum.PRUEBA}</Text>
            </View>
            <View style={style.cardPayment}>
                <Text>¿Queres cambiar tu Subscripción?</Text>
                <Text>{SubscriptionEnum.PREMIUM_ANUAL}</Text>
                <View style={style.line} />
                <Text>{SubscriptionEnum.PREMIUM_MENSUAL}</Text>
                <Button
                    style={style.button}
                    alignSelf="center"
                    bg="#FCCDCE"
                    mx={10}
                    mb={12}
                    rounded={16}
                    loading={isLoadingUpdateSubscriptionType}
                    onPress={() => { console.log("Continuar pago") }}>
                    <Text style={style.buttonText}>Continuar con el pago</Text>
                </Button>
            </View>
        </ScrollView>
    );
};

export default PaymentSection;
