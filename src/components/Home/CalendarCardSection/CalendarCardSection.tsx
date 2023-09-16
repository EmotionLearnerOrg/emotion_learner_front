import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeCalendarCardContainerStyles } from './CalendarCardSection.style';
import { Text } from 'react-native-magnus';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../SelectorGameSection/Card/Card';

const CalendarCardSection = ({
  goToCalendar,
  goToRegisterEmotionCalendar,
}: {
  goToCalendar: () => void;
  goToRegisterEmotionCalendar: () => void;
}) => {
  const style = makeCalendarCardContainerStyles();

  return (
    <View style={style.calendarCardContainer}>
      <View>
        <Text style={{ color: '#150B3D', fontWeight: "700", fontSize: 18, paddingTop: 15, textAlign: 'center' }}>
          ¿Cómo te sentiste hoy?
        </Text>
      </View>
      <View style={style.cardContainer}>
        <View style={{ flex: 0.5 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={0.4}
            onPress={goToRegisterEmotionCalendar}>
            <Card
              style={{ flex: 1 }}
              color={'#D4CAF7'}
              text={'Registrar emoción'}
              icon={<Icon name="calendar-plus" size={34} color={"#000000"} />}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={0.4}
            onPress={goToCalendar}>
            <Card
              style={{ flex: 1 }}
              color={'#D4CAF7'}
              text={'Calendario de emociones'}
              icon={<Icon name="calendar" size={34} color={"#000000"} />}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CalendarCardSection;
