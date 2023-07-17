import React, { FC, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { emocionType, emociones } from '../../components/RuletaContainer/emociones';
import { HomeRoutes, RegisterEmotionCalendarType } from '../../stacks/HomeParams';
import { makeMirrorScreenStyles } from '../MirrorScreen/MirrorScreen.style';
import { HorarioType, horarios } from '../../types/horarios';
import { makeCalendarCardContainerStyles } from '../../components/Home/CalendarCardSection/CalendarCardSection.style';
import { useGetCalendarByUser, useUpdateEmotionTodayByUser } from '../../hooks/calendar';
import { CalendarItemType, CalendarioType, getCurrentDate } from '../../types/calendario';
import { useUserAuth } from '../../contexts';

const CalendarRegisterScreen: FC<RegisterEmotionCalendarType> = ({ navigation }) => {

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

  const ButtonEmotionItem = ({ item, updateEmotionTime, }: { item: emocionType; updateEmotionTime: () => void; }) => {
    return (
      <Button
        mb={4}
        rounded={8}
        style={{ width: 120 }}
        bg={emotionSelected === item.name ? '#370928' : item.color}
        color={emotionSelected === item.name ? "#FFFFFF" : "#524b6b"}
        onPress={updateEmotionTime}>
        {item.name}
      </Button>
    );
  };

  const ButtonTimeItem = ({ item, updateStateTime }: { item: HorarioType; updateStateTime: () => void; }) => {
    return (
      <Button
        mb={4}
        rounded={8}
        style={{ width: 120 }}
        bg={timeSelected === item.name ? '#370928' : item.color}
        color={timeSelected === item.name ? "#FFFFFF" : "#524b6b"}
        onPress={updateStateTime}
      >
        {item.name}
      </Button>
    );
  };

  const goToCalendar = () => {
    navigation.replace(HomeRoutes.CALENDAR);
  };
  // Obtengo las emosiones de la fecha, en caso de ser la primera del dia, traigo defaultCalendarItemType
  const getCurrentDateItem = (calendar: CalendarioType): CalendarItemType | undefined => {
    const currentDate = new Date().toISOString().split('T')[0];
    return calendar.find(item => Object.keys(item)[0] === currentDate) ?? defaultCalendarItemType;
  };

  function validateItemsSelected(): boolean {
    if (timeSelected === '' && emotionSelected === '') {
      console.error('Error, debe seleccionar el horario y emocion');
      return false;
    }
    if (timeSelected === '') {
      console.error('Error, debe seleccionar el horario');
      return false;
    }
    if (emotionSelected === '') {
      console.error('Error, debe seleccionar la emocion');
      return false;
    }
    return true;
  }

  const handlerRegisterNewItemCalendar = () => {
    // console.log(JSON.stringify(calendar));
    if (calendar) {
      if (validateItemsSelected()) {
        const currentDateItems: CalendarItemType = getCurrentDateItem(calendar) ?? {};
        console.log("currentDateItems-> ", currentDateItems);
        let emotions = currentDateItems[getCurrentDate()] || [];

        // Actualizo la lista de las emociones del dia
        const existingEmotion = emotions[timeSelected];
        if (existingEmotion) {
          existingEmotion.emocion = emotionSelected;
        } else {
          emotions[timeSelected] = { emocion: emotionSelected };
        }

        // Actualizo la agenda del usuario completa
        // console.log("Calendario -->> ", JSON.stringify(calendar));
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
        if (calendar.findIndex(item => Object.keys(item)[0] === getCurrentDate()) === -1) {
          updatedCalendar.push({
            [getCurrentDate()]: emotions,
          });
        }

        console.log("Calendario actualizado-->> ", JSON.stringify(updatedCalendar));
        updateCalendar({ calendario: updatedCalendar });
      }
    }
  }

  return (
    <>
      <View style={styleMirror.containerView}>
        <Text style={{ alignSelf: 'center' }} fontSize={20}>{getCurrentDate()}</Text>
        <View style={styleCalendar.calendarCardContainer}>
          <Text fontSize={16} textAlign="auto" mt={10}>Elegi la emosion que queres registrar en el dia de hoy</Text>
          <FlatList
            style={styleMirror.list}
            data={emotions}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ButtonEmotionItem
                item={item}
                updateEmotionTime={() => setEmotionSelected(item.name)} />
            )}
            contentContainerStyle={{ gap }}
            columnWrapperStyle={{ gap }}
          />
        </View>
      </View>
      <View style={styleMirror.containerView}>
        <View style={styleCalendar.calendarCardContainer}>
          <Text fontSize={16} textAlign="auto" mt={10}>Marca el momento del dia en el que sentiste esta emosion</Text>
          <FlatList
            style={styleMirror.list}
            data={times}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ButtonTimeItem
                item={item}
                updateStateTime={() => { setTimeSelected(item.name) }} />
            )}
            contentContainerStyle={{ gap }}
            columnWrapperStyle={{ gap }}
          />
        </View>
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Button style={{ width: 120 }}
          mb={4}
          rounded={8}
          color="#000000"
          bg="#ee3964"
          onPress={() => {
            handlerRegisterNewItemCalendar();
            goToCalendar();
          }}>
          Aceptar
        </Button>
      </View>
    </>
  );
};

export default CalendarRegisterScreen;