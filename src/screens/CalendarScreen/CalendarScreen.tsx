import React from 'react';
import {ScrollView} from 'react-native';
import {makeCalendarScreenStyles} from './CalendarScreen.style';
import {Text} from 'react-native-magnus';

const CalendarScreen = () => {
  const style = makeCalendarScreenStyles();
  return (
    <ScrollView style={style.containerView}>
      <Text>Calendar</Text>
    </ScrollView>
  );
};

export default CalendarScreen;
