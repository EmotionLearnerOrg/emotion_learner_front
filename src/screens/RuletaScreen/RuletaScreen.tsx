import React from 'react';
import {ScrollView} from 'react-native';
import {makeRuletaScreenStyles} from './RuletaScreen.style';
import {Text} from 'react-native-magnus';

const RuletaScreen = () => {
  const style = makeRuletaScreenStyles();
  return (
    <ScrollView style={style.containerView}>
      <Text>Ruleta</Text>
    </ScrollView>
  );
};

export default RuletaScreen;
