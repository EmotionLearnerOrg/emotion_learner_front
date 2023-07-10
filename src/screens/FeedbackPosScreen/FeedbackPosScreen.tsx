import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {makeFeedbackPosScreenStyles} from './FeedbackPosScreen.style';
import {Button, Text} from 'react-native-magnus';
import {FeedbackPosType, HomeRoutes} from '../../stacks/HomeParams';

const FeedbackPosScreen: FC<FeedbackPosType> = ({route, navigation}) => {
  const {emotion} = route.params;

  const style = makeFeedbackPosScreenStyles();

  return (
    <View style={style.containerView}>
      <Text textAlign="center" fontSize={32}>
        ¡Felicitaciones!
      </Text>
      <Text fontSize={16} textAlign="center" mt={20}>
        Hiciste la emoción {emotion.name} correctamente y te ganaste una medalla:
      </Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Image source={require('./../../../assets/ilustraciones/insignia_demo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'center' }} />
      </View>
      <View style={style.calendarCardContainer}>
        <Button
          onPress={() =>
            navigation.navigate(HomeRoutes.HOME_S)
          }>
          Menu Principal
        </Button>
      </View>
    </View>
  );
};

export default FeedbackPosScreen;
