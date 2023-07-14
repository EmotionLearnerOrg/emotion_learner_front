import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeCalendarCardContainerStyles } from './CalendarCardSection.style';
import { Button, Text } from 'react-native-magnus';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CalendarCardSection = ({ goToCalendar, goToRegisterEmotionCalendar }: { goToCalendar: () => void, goToRegisterEmotionCalendar: () => void }) => {
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
        <Button
          rounded={8}
          bg="#CFC3F9"
          color="#524b6b"
          style={style.buttonCalendar}
          onPress={goToRegisterEmotionCalendar}>
          Registrar Emosion
        </Button>
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
