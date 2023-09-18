import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-magnus';
import {makeCalendarScreenStyles} from './CalendarScreen.style';
import {useGetCalendarByUser} from '../../hooks';
import {useUserAuth} from '../../contexts';
import {convertToEventItems, getCurrentDate} from '../../types';
import {TimelineCalendar, EventItem} from '@howljs/calendar-kit';
import {CalendarType, HomeRoutes} from '../../stacks/HomeParams';

const CalendarScreen: React.FC<CalendarType> = ({navigation}) => {
  const style = makeCalendarScreenStyles();
  const [items, setItems] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {uid} = useUserAuth();
  const {data: calendar} = useGetCalendarByUser({uid: uid});
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
          style={style.button}
          alignSelf="center"
          bg="#FCCDCE"
          m={5}
          rounded={20}
          onPress={goToRegisterEmotionCalendar}>
          <Text style={style.buttonText}>Registrar nueva emoción</Text>
        </Button>
      </View>
    </View>
  );
};

export default CalendarScreen;
