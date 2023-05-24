import React from 'react';
import {ScrollView} from 'react-native';
import {makeMirrorScreenStyles} from './MirrorScreen.style';
import {Text} from 'react-native-magnus';

const MirrorScreen = () => {
  const style = makeMirrorScreenStyles();
  return (
    <ScrollView style={style.containerView}>
      <Text>Mirror</Text>
    </ScrollView>
  );
};

export default MirrorScreen;
