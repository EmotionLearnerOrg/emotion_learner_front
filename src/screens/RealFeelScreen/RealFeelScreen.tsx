import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { makeRealFeelScreenStyles } from './RealFeelScreen.style';
import { Button, Text } from 'react-native-magnus';
import { RealFeelType } from '../../stacks/HomeParams';
import { HomeRoutes } from '../../stacks/HomeParams';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RealFeelScreen: FC<RealFeelType> = ({ route, navigation }) => {
  const { emotion } = route.params;
  const style = makeRealFeelScreenStyles();

  return (
    <View style={style.containerView}>
      <Text textAlign="center" fontSize={32}>
        Imagen real ({emotion.displayname})
      </Text>
      {/* <Text fontSize={16} textAlign="center" mt={20}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet.
      </Text> */}
      <View style={style.imageContainer}>
        <Image source={emotion.pathReal} style={style.image} />
      </View>
      <View style={style.floatingButtonContainer}>
        <Button
          bg="#130160"
          p="md"
          h={60}
          w={60}
          rounded="circle"
          onPress={() => navigation.navigate(HomeRoutes.REAL_FEEL, { emotion: emotion })}>
          <Icon name="arrow-right" size={34} color='white' />
        </Button>
      </View>
    </View>
  );
};

export default RealFeelScreen;
