import React from 'react';
import { View } from 'react-native';
import { makeFeedbackViewStyles } from './ArcadeView.style';
import { Button, Text } from 'react-native-magnus';

const ArcadeView = ({ goToRuleta }: { goToRuleta?: () => void; }) => {
    const style = makeFeedbackViewStyles();
    return (
        <View style={style.containerView}>
            <Text fontSize={18} textAlign="center" mt={20}>
                {'¡Bienvenido al modo Arcade!'}
            </Text>
            <Text fontSize={18} textAlign="center" mt={20}>
                {'El modo Arcade te desafiara todo lo aprendido y podrás demostrar tus habilidades para expresar tus emociones y reconocerlas en los demas.\n¡Diviértete y aprende mientras juegas!\n¡Acepta el desafío y a jugar!'}
            </Text>
            <View style={style.buttonContainer}>
                <Button onPress={() => goToRuleta && goToRuleta()}>
                    {'Comenzar'}
                </Button>
            </View>
        </View>
    );
};

export default ArcadeView;