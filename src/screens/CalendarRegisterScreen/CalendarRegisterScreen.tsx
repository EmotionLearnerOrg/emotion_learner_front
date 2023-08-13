import React, { FC, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { emociones, emocionType } from '../../components';
import { HomeRoutes, RegisterEmotionCalendarType } from '../../stacks/HomeParams';
import { makeMirrorScreenStyles } from '../MirrorScreen/MirrorScreen.style';
import { HorarioEnum, HorarioType, horarios } from '../../types/horarios';
import { makeCalendarCardContainerStyles } from '../../components/Home/CalendarCardSection/CalendarCardSection.style';
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
  getFormattedCurrentDate
} from '../../types/calendario';
import { useUserAuth } from '../../contexts';
import { generateRandomCalendario } from '../CalendarScreen/CalendarScreen.mockup';

const CalendarRegisterScreen: FC<RegisterEmotionCalendarType> = ({
  navigation,
}) => {
  const styleMirror = makeMirrorScreenStyles();
  const styleCalendar = makeCalendarCardContainerStyles();

  const { uid } = useUserAuth();
  const { data: calendar } = useGetCalendarByUser({ uid: uid });
  const { mutate: updateCalendar } = useUpdateEmotionTodayByUser({ uid });

  const gap = 16;
  const emotions = Object.values(emociones);
  const times = Object.values(horarios);
  const [timeSelected, setTimeSelected] = useState('');
  const [emotionSelected, setEmotionSelected] = useState('');

  const defaultCalendarItemType: CalendarItemType = {
    [getCurrentDate()]: {
      [timeSelected]: { emocion: emotionSelected },
    },
  };

  // Obtengo las emosiones de la fecha, en caso de ser la primera del dia, traigo defaultCalendarItemType
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
      alertMessageAccept('Error', 'Debe seleccionar un horario y una emoción');
      return false;
    }
    if (timeSelected === '') {
      alertMessageAccept('Error', 'Debe seleccionar un horario');
      return false;
    }
    if (emotionSelected === '') {
      alertMessageAccept('Error', 'Debe seleccionar una emoción');
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
          emotions[timeSelected] = { emocion: emotionSelected };
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

        // Generar 3 meses de emociones random para que no este vacio desde el principio (reemplazarlo por unica vez en la linea 122)
        // updateCalendar({ calendario: generateRandomCalendario() })
        updateCalendar({ calendario: updatedCalendar });
        goToCalendar();
      }
    }
  };

  const alertMessageAccept = (title: string, message: string) => {
    Alert.alert(title, message, [
      { text: 'Aceptar', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const goToCalendar = () => {
    navigation.replace(HomeRoutes.CALENDAR);
  };

  const ButtonEmotionItem = ({
    item,
    updateEmotionTime,
  }: {
    item: emocionType;
    updateEmotionTime: () => void;
  }) => {
    return (
      <Button
        mb={4}
        rounded={8}
        style={{ width: 80, height: 50 }}
        bg={item.colorBottonContainer}
        color={emotionSelected === item.name ? '#FFFFFF' : '#524b6b'}
        onPress={updateEmotionTime}>
        {item.displayname}
      </Button>
    );
  };

  const ButtonTimeItem = ({
    item,
    updateStateTime,
  }: {
    item: HorarioType;
    updateStateTime: () => void;
  }) => {
    return (
      <Button
        mb={4}
        rounded={8}
        style={{ width: 120, height: 50 }}
        bg={item.color}
        color={timeSelected === item.name ? '#FFFFFF' : '#524b6b'}
        onPress={updateStateTime}>
        {item.name}
      </Button>
    );
  };

  return (
    <>
      <View style={styleMirror.containerView}>
        <Text style={{ fontWeight: 'bold', alignSelf: 'center' }} fontSize={20}>
          {`Hoy es: ${getFormattedCurrentDate()}`}
        </Text>
        <View style={styleCalendar.calendarCardContainer}>
          <Text fontWeight="bold" fontSize={16} textAlign="auto" mx={20} mt={10}>
            Elegí la emoción que queres registrar en el dia de hoy
          </Text>
          <FlatList
            style={styleMirror.list}
            data={emotions}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ButtonEmotionItem
                item={item}
                updateEmotionTime={() => setEmotionSelected(item.name)}
              />
            )}
            contentContainerStyle={{ gap }}
            columnWrapperStyle={{
              gap,
              justifyContent: 'center',
            }}
          />
        </View>
      </View>
      <View style={styleMirror.containerView}>
        <View style={styleCalendar.calendarCardContainer}>
          <Text fontWeight="bold" fontSize={16} textAlign="auto" mx={20} mt={10}>
            Marca el momento del día en el que sentiste esta emoción
          </Text>
          <FlatList
            style={styleMirror.list}
            data={times}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ButtonTimeItem
                item={item}
                updateStateTime={() => {
                  setTimeSelected(item.name);
                }}
              />
            )}
            contentContainerStyle={{ gap }}
            columnWrapperStyle={{
              gap,
              justifyContent: 'center',
            }}
          />
        </View>
      </View>
      <Button
        style={styleMirror.button}
        alignSelf="center"
        bg="#FCCDCE"
        m={25}
        rounded={16}
        onPress={() => {
          handlerRegisterNewItemCalendar();
        }}>
        <Text style={styleMirror.buttonText}>Registrar emoción</Text>
      </Button>
    </>
  );
};

export default CalendarRegisterScreen;
