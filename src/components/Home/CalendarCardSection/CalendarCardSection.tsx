import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {makeCalendarCardContainerStyles} from './CalendarCardSection.style';
import {Button, Text} from 'react-native-magnus';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CalendarCardSection = () => {
  const style = makeCalendarCardContainerStyles();

  return (
    <View style={style.calendarCardContainer}>
      <View>
        <Text fontWeight="700" fontSize={16}>
          Insignias ganadas
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log('no se que hace esto pero ok')}
        style={{
          position: 'absolute',
          right: 24,
          top: 20,
          transform: [{rotate: '270deg'}],
        }}>
        <Icon name="label-variant-outline" size={34} />
      </TouchableOpacity>
      <View style={style.cardContainer}>
        <View style={style.emotionsContainer}>
          <Button
            mb={4}
            rounded={8}
            style={{width: 100}}
            bg="#CBC9D4"
            color="#524b6b">
            Feliz
          </Button>
          <Button
            mb={4}
            rounded={8}
            style={{width: 100}}
            bg="#CBC9D4"
            color="#524b6b">
            Calmo
          </Button>
          <Button rounded={8} style={{width: 100}} bg="#CBC9D4" color="#524b6b">
            Enojado
          </Button>
        </View>
        <Button
          rounded={8}
          bg="#CFC3F9"
          color="#524b6b"
          style={{width: '100%'}}>
          Acceder a calendario
        </Button>
      </View>
    </View>
  );
};

export default CalendarCardSection;
