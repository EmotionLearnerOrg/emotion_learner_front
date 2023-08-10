import React, { useState } from 'react';
import { makePaymentSectionStyles } from './PaymentSection.style';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-magnus';
import { View } from 'react-native';
import { SubscriptionEnum } from '../../../types/subscripcion';
import { useUserData } from '../../../contexts';

interface RadioButtonProps {
    label: string;
    selected: boolean;
    handleSubscriptionTypeChange: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, selected, handleSubscriptionTypeChange }) => (
    <TouchableOpacity onPress={handleSubscriptionTypeChange} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#FCCDCE', backgroundColor: selected ? '#FCCDCE' : 'transparent' }} />
        <Text style={{ marginLeft: 10 }}>{label}</Text>
    </TouchableOpacity>
);

const PaymentSection = () => {
    const style = makePaymentSectionStyles();
    const {
        subscriptionType: subscriptionType,
        updateSubscriptionType,
        isLoadingUpdateSubscriptionType,
    } = useUserData();

    const [selectedSubscriptionType, setSelectedSubscriptionType] = useState(subscriptionType);

    const handleSubscriptionTypeChange = (newSubscriptionType: string) => {
        setSelectedSubscriptionType(newSubscriptionType);
    };

    const handlePayment = () => {
        updateSubscriptionType({subscriptionType: selectedSubscriptionType!});
      };

    return (
        <ScrollView style={style.containerView}>
            <View style={style.cardPayment}>
                <Text>Tu subscripción actual es:</Text>
                <View style={style.line} />
                <Text>{subscriptionType !== undefined ? SubscriptionEnum[subscriptionType] : SubscriptionEnum.PRUEBA}</Text>
            </View>
            <View style={style.cardPayment}>
                <Text>¿Queres cambiar tu Subscripción?</Text>
                <RadioButton label={SubscriptionEnum.PREMIUM_ANUAL} selected={selectedSubscriptionType === 'PREMIUM_ANUAL'} handleSubscriptionTypeChange={() => handleSubscriptionTypeChange('PREMIUM_ANUAL')} />
                <View style={style.line} />
                <RadioButton label={SubscriptionEnum.PREMIUM_MENSUAL} selected={selectedSubscriptionType === 'PREMIUM_MENSUAL'} handleSubscriptionTypeChange={() => handleSubscriptionTypeChange('PREMIUM_MENSUAL')} />
                <Button
                    style={style.button}
                    alignSelf="center"
                    bg="#FCCDCE"
                    mx={10}
                    mb={12}
                    rounded={16}
                    loading={isLoadingUpdateSubscriptionType}
                    onPress={handlePayment}>
                    <Text style={style.buttonText}>Continuar con el pago</Text>
                </Button>
            </View>
        </ScrollView>
    );
};

export default PaymentSection;
