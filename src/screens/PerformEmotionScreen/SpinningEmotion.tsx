import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {emocionType} from '../../components';
import {Text} from 'react-native-magnus';

const SpinningEmotion = ({emotionParam}: {emotionParam: emocionType}) => {
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
      }}>
      <Animatable.Image
        animation="rotate"
        iterationCount="infinite"
        duration={2000} // Ajusta la velocidad de la rotación aquí
        source={emotionParam.pathMonstruo} // Ruta de tu imagen PNG
        style={{width: 200, height: 260}}
      />
      {/* <Text fontSize={24} textAlign="center" color="#0033ff0">
        Procesando emoción...
      </Text> */}
    </View>
  );
};

export default SpinningEmotion;
