import React from 'react';
import {View} from 'react-native';
import {makeCalendarCardContainerStyles} from './HeaderSection.style';
import {Icon, Text} from 'react-native-magnus';

const HeaderSection = () => {
  const style = makeCalendarCardContainerStyles();

  return (
    <View style={style.calendarCardContainer}>
      <View>
        <Text fontWeight="700" fontSize={32}>
          Hello
        </Text>
        <Text fontWeight="700" fontSize={32}>
          Orlando Diggs
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 'auto',
        }}>
        <Icon
          rounded="circle"
          name="user"
          // color="white"
          fontFamily="Feather"
          fontSize={64}
        />
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
