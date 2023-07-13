import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {makeHeaderBackStyles} from './HeaderBack.style';

const HeaderBack = () => {
  const navigation = useNavigation();
  const style = makeHeaderBackStyles();

  return (
    <View style={style.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBack;
