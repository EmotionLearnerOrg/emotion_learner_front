import React from 'react';
import {Image, View} from 'react-native';
import {makeFeedbackViewStyles} from './ArcadeView.style';
import {Button, Text} from 'react-native-magnus';

const ArcadeView = ({goToRuleta}: {goToRuleta?: () => void}) => {
  const style = makeFeedbackViewStyles();
  return (
    <View style={style.containerView}>
      {/* <Image
        source={require('../../../assets/ilustraciones/monster_default_5.png')}
        style={style.image}
      /> */}
      <View style={style.tarjetablanca}>
        <Text style={style.heading}>¡Bienvenido al modo Arcade!</Text>
        <Text style={style.subtitle}>Dos etapas llenas de diversión</Text>
        <Text style={style.italic}>Ruleta</Text>
        <Text style={style.arrow}>↓</Text>
        <Text style={style.italic}>Asociación de emociones</Text>
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
      <Image
        source={require('../../../assets/ilustraciones/monster_default_4.png')}
        style={style.image}
      />
    </View>
  );
};

export default ArcadeView;
