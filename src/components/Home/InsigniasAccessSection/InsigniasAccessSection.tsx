import React from 'react';
import {View} from 'react-native';
import {makeCalendarCardContainerStyles} from './InsigniasAccessSection.style';
import {Button, Text} from 'react-native-magnus';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeRoutes, HomeStackParamList} from '../../../stacks/Homestack';

const InsigniasAccessSection = () => {
  const style = makeCalendarCardContainerStyles();
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  return (
    <View style={style.insigniasContainer}>
      <View>
        <Text fontWeight="700" fontSize={16}>
          Insignias ganadas
        </Text>
      </View>
      <Button
        rounded={8}
        bg="#F5CACC"
        color="#524b6b"
        style={style.button}
        onPress={() => navigation.navigate(HomeRoutes.INSIGNIAS)}>
        Acceder a Mis Insignias
      </Button>
    </View>
  );
};

export default InsigniasAccessSection;
