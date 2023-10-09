import React from 'react';
import {View} from 'react-native';
import {makeFeedbackViewStyles} from './ArcadeView.style';
import {Button, Text} from 'react-native-magnus';

const ArcadeView = ({goToRuleta}: {goToRuleta?: () => void}) => {
  const style = makeFeedbackViewStyles();
  return (
    <View style={style.containerView}>
      <View style={style.tarjetablanca}>
        <Text fontSize={18} textAlign="center" mt={20}>
          {'¡Bienvenido al modo Arcade!'}
        </Text>
        <Text fontSize={18} textAlign="left" mt={20}>
          {`  Este juego consiste en 2 etapas :
    1 -> Ruleta
    2 -> Asociacion de emociones`}
        </Text>
        <Button
          onPress={() => goToRuleta && goToRuleta()}
          bg="#FCCDCE"
          alignSelf="center"
          mt={16}
          mb={5}
          rounded={16}
          style={{width: '100%'}}>
          <Text style={{color: '#524B6B', fontSize: 16, fontWeight: 'bold'}}>
            Comenzar
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default ArcadeView;
