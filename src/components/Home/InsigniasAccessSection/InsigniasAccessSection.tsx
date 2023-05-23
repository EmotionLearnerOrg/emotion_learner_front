import React from 'react';
import {View} from 'react-native';
import {makeCalendarCardContainerStyles} from './InsigniasAccessSection.style';
import {Button, Text} from 'react-native-magnus';

const InsigniasAccessSection = () => {
  const style = makeCalendarCardContainerStyles();

  return (
    <View style={style.calendarCardContainer}>
      <View>
        <Text fontWeight="700" fontSize={16}>
          Insignias ganadas
        </Text>
      </View>
      <Button rounded={8} bg="#F5CACC" color="#524b6b" style={{width: '100%'}}>
        Acceder a Mis Insignias
      </Button>
    </View>
  );
};

export default InsigniasAccessSection;
