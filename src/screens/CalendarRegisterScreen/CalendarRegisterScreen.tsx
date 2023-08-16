import React, {FC, useState} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Button, Text} from 'react-native-magnus';
import {emociones} from '../../components';
import {HomeRoutes, RegisterEmotionCalendarType} from '../../stacks/HomeParams';
import {HorarioEnum, horarios} from '../../types/horarios';
import {makeCalendarRegisterScreenStyles} from './CalendarRegisterScreen.style';
import {
  useGetCalendarByUser,
  useUpdateEmotionTodayByUser,
} from '../../hooks/calendar';
import {
  CalendarItemType,
  CalendarioType,
  getCurrentDate,
  getCurrentHorarioEnum,
  horarioConfigUTC,
} from '../../types/calendario';
import {useUserAuth} from '../../contexts';
import ButtonCalendarItem from './ButtonCalendarItem';

const CalendarRegisterScreen: FC<RegisterEmotionCalendarType> = ({
  navigation,
}) => {
  const style = makeCalendarRegisterScreenStyles();

  const {uid} = useUserAuth();
  const {data: calendar} = useGetCalendarByUser({uid: uid});
  const {mutate: updateCalendar} = useUpdateEmotionTodayByUser({uid});

  const gap = 16;
  const emotions = Object.values(emociones);
  const times = Object.values(horarios);
  const [timeSelected, setTimeSelected] = useState('');
  const [emotionSelected, setEmotionSelected] = useState('');

  const defaultCalendarItemType: CalendarItemType = {
    [getCurrentDate()]: {
      [timeSelected]: {emocion: emotionSelected},
    },
  };

  // Obtengo las emociones de la fecha, en caso de ser la primera del dia, traigo defaultCalendarItemType
  const getCurrentDateItem = (
    calendar: CalendarioType,
  ): CalendarItemType | undefined => {
    const currentDate = new Date().toISOString().split('T')[0];
    return (
      calendar.find(item => Object.keys(item)[0] === currentDate) ??
      defaultCalendarItemType
    );
  };

  const validateItemsSelected = (): boolean => {
    if (timeSelected === '' && emotionSelected === '') {
      alertMessageAccept('Error', 'debe seleccionar el horario y emocion');
      return false;
    }
    if (timeSelected === '') {
      alertMessageAccept('Error', 'Debe seleccionar el horario');
      return false;
    }
    if (emotionSelected === '') {
      alertMessageAccept('Error', 'debe seleccionar la emocion');
      return false;
    }

    let selectedTime = horarioConfigUTC[timeSelected as HorarioEnum];
    let timeNow = horarioConfigUTC[getCurrentHorarioEnum() as HorarioEnum];

    if (selectedTime && timeNow && timeNow.order < selectedTime.order) {
      alertMessageAccept(
        'Error',
        'El horario seleccionado está fuera del rango actual.',
      );
      return false;
    }
    return true;
  };

  const handlerRegisterNewItemCalendar = () => {
    if (calendar) {
      if (validateItemsSelected()) {
        const currentDateItems: CalendarItemType =
          getCurrentDateItem(calendar) ?? {};
        let emotions = currentDateItems[getCurrentDate()] || [];

        // Actualizo la lista de las emociones del dia
        const existingEmotion = emotions[timeSelected];
        if (existingEmotion) {
          existingEmotion.emocion = emotionSelected;
        } else {
          emotions[timeSelected] = {emocion: emotionSelected};
        }

        // Actualizo la agenda del usuario completa
        const updatedCalendar = calendar.map(item => {
          const dateKey = Object.keys(item)[0];
          if (dateKey === getCurrentDate()) {
            return {
              [dateKey]: emotions,
            };
          }
          return item;
        });

        // Agrego nuevo dia del calendario
        if (
          calendar.findIndex(
            item => Object.keys(item)[0] === getCurrentDate(),
          ) === -1
        ) {
          updatedCalendar.push({
            [getCurrentDate()]: emotions,
          });
        }

        updateCalendar({calendario: updatedCalendar});
        goToCalendar();
      }
    }
  };

  const alertMessageAccept = (title: string, message: string) => {
    Alert.alert(title, message, [
      {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const goToCalendar = () => {
    navigation.replace(HomeRoutes.CALENDAR);
  };

  return (
    <>
      <View style={style.containerView}>
        <Text style={{alignSelf: 'center'}} fontSize={20}>
          {getCurrentDate()}
        </Text>
        <View style={style.calendarCardContainer}>
          <Text fontSize={16} textAlign="auto" mt={10}>
            Elegi la emosion que queres registrar en el dia de hoy
          </Text>
          <FlatList
            style={style.list}
            data={emotions}
            numColumns={2}
            keyExtractor={(item, index) => `${item.name}${index.toString()}`}
            renderItem={({item}) => (
              <ButtonCalendarItem
                action={() => setEmotionSelected(item.name)}
                item={item}
                bg={emotionSelected === item.name ? '#370928' : item.color}
                color={emotionSelected === item.name ? '#FFFFFF' : '#524b6b'}
              />
            )}
            contentContainerStyle={{gap}}
            columnWrapperStyle={{gap}}
          />
        </View>
      </View>
      <View style={style.containerView}>
        <View style={style.calendarCardContainer}>
          <Text fontSize={16} textAlign="auto" mt={10}>
            Marca el momento del dia en el que sentiste esta emosion
          </Text>
          <FlatList
            style={style.list}
            data={times}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ButtonCalendarItem
                action={() => {
                  setTimeSelected(item.name);
                }}
                item={item}
                bg={timeSelected === item.name ? '#370928' : item.color}
                color={timeSelected === item.name ? '#FFFFFF' : '#524b6b'}
              />
            )}
            contentContainerStyle={{gap}}
            columnWrapperStyle={{gap}}
          />
        </View>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Button
          style={{width: 120}}
          mb={4}
          rounded={8}
          color="#000000"
          bg="#ee3964"
          onPress={() => {
            handlerRegisterNewItemCalendar();
          }}>
          Aceptar
        </Button>
      </View>
    </>
  );
};

export default CalendarRegisterScreen;
