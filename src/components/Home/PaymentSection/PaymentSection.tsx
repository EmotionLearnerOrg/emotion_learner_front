import React, { useState } from 'react';
import { makePaymentSectionStyles } from './PaymentSection.style';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-magnus';
import Modal from 'react-native-modal';
import { SubscriptionEnum } from '../../../types/subscripcion';
import { useUserData } from '../../../contexts';
import RadioButton from './RadioButton'

const PaymentSection = () => {
    const style = makePaymentSectionStyles();
    const {
        subscriptionType: subscriptionType,
        updateSubscriptionType,
        isLoadingUpdateSubscriptionType,
    } = useUserData();

    const [selectedSubscriptionType, setSelectedSubscriptionType] = useState(subscriptionType);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleSubscriptionTypeChange = (newSubscriptionType: string) => {
        setSelectedSubscriptionType(newSubscriptionType);
    };

    const handlePayment = () => {
        updateSubscriptionType({ subscriptionType: selectedSubscriptionType! });
        setModalVisible(true);
    };

    return (
        <ScrollView style={style.containerView}>
            <View style={style.cardPayment}>
                <Text style={{ color: '#150B3D', fontSize: 16, fontWeight: 'bold' }}>Tu subscripción actual es:</Text>
                <View style={style.line} />
                <Text style={{ color: '#524B6B', fontSize: 18 }}>{subscriptionType !== undefined ? SubscriptionEnum[subscriptionType] : SubscriptionEnum.PRUEBA}</Text>
            </View>
            <View style={style.cardPayment}>
                <Text style={{ color: '#150B3D', fontSize: 16, marginBottom: 20, fontWeight: 'bold' }}>¿Queres cambiar tu subscripción?</Text>
                <RadioButton label={SubscriptionEnum.PREMIUM_ANUAL} selected={selectedSubscriptionType === 'PREMIUM_ANUAL'} handleOnPress={() => handleSubscriptionTypeChange('PREMIUM_ANUAL')} />
                <Text style={{ color: '#AAA6B9' }}>Podés cancelar cuando quieras</Text>
                <View style={style.line} />
                <RadioButton label={SubscriptionEnum.PREMIUM_MENSUAL} selected={selectedSubscriptionType === 'PREMIUM_MENSUAL'} handleOnPress={() => handleSubscriptionTypeChange('PREMIUM_MENSUAL')} />
                <Text style={{ color: '#AAA6B9' }}>Podés cancelar cuando quieras</Text>
                <Button
                    style={style.button}
                    alignSelf="center"
                    bg="#FCCDCE"
                    mt={12}
                    mb={12}
                    rounded={16}
                    loading={isLoadingUpdateSubscriptionType}
                    onPress={handlePayment}>
                    <Text style={style.buttonText}>Continuar con el pago</Text>
                </Button>
            </View>
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                style={style.modal}
                backdropOpacity={0.5}
                useNativeDriver={true}>
                <View style={style.modalContent}>
                    <Text style={style.modalTitle}>¡Pago exitoso!</Text>
                    <Text style={style.modalMessage}>Felicidades, ahora sos usuario Premium</Text>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default PaymentSection;
