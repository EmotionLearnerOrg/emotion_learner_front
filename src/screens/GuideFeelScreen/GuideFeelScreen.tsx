import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {makeGuideFeelScreenStyles} from './GuideFeelScreen.style';
import {Button, Text} from 'react-native-magnus';
import {GuideFeelType, HomeRoutes} from '../../stacks/HomeParams';

const GuideFeelScreen: FC<GuideFeelType> = ({route, navigation}) => {
  const {emotion} = route.params;

  const style = makeGuideFeelScreenStyles();

  return (
    <View style={style.containerView}>
      <Text textAlign="center" fontSize={32}>
        Imagen instructivo ({emotion.name})
      </Text>
      <Text fontSize={16} textAlign="center" mt={20}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet.
      </Text>
      <Image source={emotion.pathGuia} style={style.image} />
      <View style={style.calendarCardContainer}>
        <Button
          onPress={() =>
            navigation.navigate(HomeRoutes.REAL_FEEL, {emotion: emotion})
          }>
          Ir a imagen real
        </Button>
      </View>
    </View>
  );
};

export default GuideFeelScreen;
