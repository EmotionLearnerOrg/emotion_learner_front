import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {makeRealFeelScreenStyles} from './RealFeelScreen.style';
import {Button, Text} from 'react-native-magnus';
import {RealFeelType} from '../../stacks/HomeParams';
import {HomeRoutes} from '../../stacks/HomeParams';
const RealFeelScreen: FC<RealFeelType> = ({route, navigation}) => {
  const {emotion} = route.params;
  const style = makeRealFeelScreenStyles();

  return (
    <View style={style.containerView}>
      <Text textAlign="center" fontSize={32}>
        Imagen real ({emotion.name})
      </Text>
      <Text fontSize={16} textAlign="center" mt={20}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet.
      </Text>
      <Image source={emotion.pathReal} style={style.image} />
      <View style={style.buttonContainer}>
        <Button
          onPress={() =>
            navigation.navigate(HomeRoutes.PERFORM_EMOTION, {emotion: emotion})
          }>
          Ir a realizar emocion
        </Button>
      </View>
    </View>
  );
};

export default RealFeelScreen;
