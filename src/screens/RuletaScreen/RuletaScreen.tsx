import React from 'react';
import {View} from 'react-native';
import Ruleta from './Ruleta';

const RuletaScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Ruleta divisions={4} />
    </View>
  );
};

export default RuletaScreen;
