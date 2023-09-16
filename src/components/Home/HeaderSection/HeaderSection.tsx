import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeHeaderSectionStyles } from './HeaderSection.style';
import { Icon, Text } from 'react-native-magnus';
import { useUserData } from '../../../contexts';

const HeaderSection = ({ goToProfile }: { goToProfile: () => void }) => {
  const style = makeHeaderSectionStyles();
  const { nickName } = useUserData();

  return (
    <View style={style.headerContainer}>
      <View>
        <Text color='#150B3D' fontWeight="700" fontSize={32}>
          Hola
        </Text>
        <Text color='#150B3D' fontWeight="700" fontSize={32}>
          {nickName}!
        </Text>
      </View>
      <View style={style.configContainer}>
        {/* Lo comento ya que puse el de usuario en configuracion para que sea mas amigable, ademas solo estaba de vista */}
        {/* <Icon
          rounded="circle"
          name="user"
          fontFamily="Feather"
          color="black"
          top={-10}
          fontSize={40}
        /> */}
        <TouchableOpacity onPress={goToProfile}>
          <Icon
            top={10}
            name="user"
            color="black"
            fontSize={40}
            right={4}
            fontFamily="FontAwesome"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderSection;
