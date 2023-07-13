import React from 'react';
import {View} from 'react-native';
import {makeHeaderSectionStyles} from './HeaderSection.style';
import {Icon, Text} from 'react-native-magnus';
import {useUserAuth} from '../../../contexts';

const HeaderSection = () => {
  const style = makeHeaderSectionStyles();
  const {nickName} = useUserAuth();

  return (
    <View style={style.headerContainer}>
      <View>
        <Text fontWeight="700" fontSize={32}>
          Hola
        </Text>
        <Text fontWeight="700" fontSize={32}>
          {nickName}!
        </Text>
      </View>
      <View style={style.configContainer}>
        <Icon rounded="circle" name="user" fontFamily="Feather" fontSize={64} />
        <Icon
          top={-16}
          name="cog"
          color="yellow700"
          fontSize="xl"
          fontFamily="FontAwesome"
        />
      </View>
    </View>
  );
};

export default HeaderSection;
