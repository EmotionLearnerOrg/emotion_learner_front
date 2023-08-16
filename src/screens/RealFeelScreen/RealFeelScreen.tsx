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
      <Image source={emotion.pathReal} style={style.image} />
      <View style={style.buttonContainer}>
        <Button
          onPress={() =>
            navigation.navigate(HomeRoutes.PERFORM_EMOTION, {
              emotion: emotion,
              type: 'Mirror',
            })
          }>
          Siguiente
        </Button>
      </View>
    </View>
  );
};

export default RealFeelScreen;
