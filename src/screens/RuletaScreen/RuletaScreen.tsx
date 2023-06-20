import React, {FC} from 'react';
import {View} from 'react-native';
import {makeRuletaScreenStyles} from './RuletaScreen.style';
import {Ruleta} from '../../components/Ruleta';
import {Text} from 'react-native-magnus';
import {HomeRoutes, RuletaType} from '../../stacks/HomeParams';
import {emocionType} from '../../components/Ruleta/emociones';
import useDataUser from '../../hooks/useDataUser';

const RuletaScreen: FC<RuletaType> = ({navigation}) => {
  const style = makeRuletaScreenStyles();

  const goToPerformEmotion = (emotion: emocionType) => {
    navigation.navigate(HomeRoutes.PERFORM_EMOTION, {
      emotion: emotion,
    });
  };
  const {nickName} = useDataUser();

  return (
    <View style={style.container}>
      <Text style={{alignSelf: 'center'}} fontSize={32}>
        Gira la ruleta
      </Text>
      <Text fontSize={16} textAlign="center" style={{marginTop: 20}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet.
      </Text>
      <Ruleta divisions={6} goToPerformEmotion={goToPerformEmotion} />
    </View>
  );
};

export default RuletaScreen;
