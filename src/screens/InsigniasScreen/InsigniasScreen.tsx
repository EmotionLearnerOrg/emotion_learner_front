import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {makeInsigniasScreenStyles} from './InsigniasScreen.style';
import {Text} from 'react-native-magnus';

const InsigniasScreen: FC<{}> = () => {
  const style = makeInsigniasScreenStyles();
  return (
    <ScrollView style={style.containerView}>
      <Text>Insignias</Text>
    </ScrollView>
  );
};

export default InsigniasScreen;
