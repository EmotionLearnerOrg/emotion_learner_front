import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-magnus';
import { makeCalendarScreenStyles } from './CalendarScreen.style';
import { useGetCalendarByUser } from '../../hooks/calendar';
import { useUserAuth } from '../../contexts';
import { convertToEventItems, getCurrentDate } from '../../types/calendario';
import { TimelineCalendar, EventItem } from '@howljs/calendar-kit';
import { CalendarType, HomeRoutes } from '../../stacks/HomeParams';

const CalendarScreen: React.FC<CalendarType> = ({ navigation }) => {

  const style = makeCalendarScreenStyles();
  const [items, setItems] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { uid } = useUserAuth();
  const { data: calendar } = useGetCalendarByUser({ uid: uid });
  const minDate = `${new Date().getFullYear()}-01-01`;
  const maxDate = `${new Date().getFullYear()}-12-31`;

  useEffect(() => {
    if (calendar) {
      const convertedSchedule: EventItem[] = convertToEventItems(calendar);
      setItems(convertedSchedule);
    }
  }, [calendar]);

  useEffect(() => {
    if (items.length > 0) {
      setIsLoading(!isLoading);
    }
  }, [items]);

  const goToRegisterEmotionCalendar = () => {
    navigation.replace(HomeRoutes.REGISTEREMOTIONCALENDAR);
  };

  /*
      TODO: Hay que ver poque toma siempre la zona horaria GTM -7
      la cagada aca es que la emosion noche no la muestra ya que pasa despues de las 12 (por eso el horario de 9-21hs)
   */
  return (
    <View style={style.container}>
      <TimelineCalendar
        viewMode="week"
        events={items}
        start={9}
        end={21}
        initialTimeIntervalHeight={50}
        initialDate={getCurrentDate()}
        minDate={minDate}
        maxDate={maxDate}
        isLoading={isLoading}
      />
      <View style={style.buttonContainer}>
        <Button
          mt={4}
          mb={4}
          rounded={8}
          color="#000000"
          bg="#F08080"
          style={style.button}
          onPress={goToRegisterEmotionCalendar}>
          Nueva emocion
        </Button>
      </View>
    </View >
  );
};

export default CalendarScreen;