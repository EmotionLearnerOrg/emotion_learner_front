import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {makeCalendarCardContainerStyles} from './CalendarCardSection.style';
import {Button, Text} from 'react-native-magnus';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CalendarCardSection = ({goToCalendar}: {goToCalendar: () => void}) => {
  const style = makeCalendarCardContainerStyles();

  return (
    <View style={style.calendarCardContainer}>
      <View>
        <Text fontWeight="700" fontSize={16}>
          Como te sentiste hoy?
        </Text>
      </View>
      <TouchableOpacity style={style.labelContainer}>
        <Icon name="label-variant-outline" size={34} />
      </TouchableOpacity>
      <View style={style.cardContainer}>
        <View style={style.emotionsContainer}>
          <Button
            mb={4}
            rounded={8}
            style={style.buttonEmotion}
            bg="#CBC9D4"
            color="#524b6b">
            Feliz
          </Button>
          <Button
            mb={4}
            rounded={8}
            style={style.buttonEmotion}
            bg="#CBC9D4"
            color="#524b6b">
            Calmo
          </Button>
          <Button
            rounded={8}
            style={style.buttonEmotion}
            bg="#CBC9D4"
            color="#524b6b">
            Enojado
          </Button>
        </View>
        <Button
          rounded={8}
          bg="#CFC3F9"
          color="#524b6b"
          style={style.buttonCalendar}
          onPress={goToCalendar}>
          Acceder a calendario
        </Button>
      </View>
    </View>
  );
};

export default CalendarCardSection;
