import React, {FC} from 'react';
import {View} from 'react-native';
import {makeRuletaScreenStyles} from './RuletaScreen.style';
import {Text} from 'react-native-magnus';
import {HomeRoutes, RuletaType} from '../../stacks/HomeParams';
import {RuletaContainer, emocionType} from '../../components';

const RuletaScreen: FC<RuletaType> = ({navigation}) => {
  const style = makeRuletaScreenStyles();

  const goToPerformEmotion = (emotion: emocionType) => {
    navigation.navigate(HomeRoutes.PERFORM_EMOTION, {
      emotion: emotion,
    });
  };

  return (
    <View style={style.container}>
      <Text textAlign="center" fontSize={32}>
        Gira la ruleta
      </Text>
      <Text fontSize={16} textAlign="center" mt={20}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet.
      </Text>
      <RuletaContainer divisions={5} goToPerformEmotion={goToPerformEmotion} />
    </View>
  );
};

export default RuletaScreen;
