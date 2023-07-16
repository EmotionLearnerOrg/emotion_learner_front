import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeHeaderSectionStyles } from './HeaderSection.style';
import { Icon, Text } from 'react-native-magnus';
import { useUserAuth } from '../../../contexts';

const HeaderSection = () => {
  const style = makeHeaderSectionStyles();
  const { nickName } = useUserAuth();

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
        {/* <Icon rounded="circle" name="user" fontFamily="Feather" fontSize={64} /> */}
        <TouchableOpacity onPress={() => console.log("Apreto el icono")}>
          <Icon
            top={5}
            name="cog"
            color="black"
            fontSize={50}
            fontFamily="FontAwesome"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderSection;
