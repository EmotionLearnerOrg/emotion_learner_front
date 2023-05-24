import React from 'react';
import {ScrollView} from 'react-native';
import {makeAsociationScreenStyles} from './AsociationScreen.style';
import {Text} from 'react-native-magnus';

const AsociationScreen = () => {
  const style = makeAsociationScreenStyles();
  return (
    <ScrollView style={style.containerView}>
      <Text>Asociation</Text>
    </ScrollView>
  );
};

export default AsociationScreen;
