import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {makeHeaderCommonStyles} from './HeaderCommon.style';
import {HomeRoutes, HomeStackParamList} from '../../stacks/HomeParams';

const HeaderCommon = () => {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  const style = makeHeaderCommonStyles();

  return (
    <View style={style.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(HomeRoutes.HOME_S)}>
        <Icon name="home" size={40} color={'#000000'} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCommon;
