import React, { FC, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button, Text } from 'react-native-magnus';
import { emocionType, emociones } from '../../components/RuletaContainer/emociones';
import { RegisterEmotionCalendarType } from '../../stacks/HomeParams';
import { makeMirrorScreenStyles } from '../MirrorScreen/MirrorScreen.style';
import { AgendaSchedule } from 'react-native-calendars';
import moment from 'moment';
import { HorarioType, horarios } from '../../types/horarios';
import 'moment/locale/es'; // Importar el idioma español
import { makeCalendarCardContainerStyles } from '../../components/Home/CalendarCardSection/CalendarCardSection.style';
import { useCreateEmotionTodayByUser } from '../../hooks/calendar';
import { CalendarioItemType } from '../../types/calendario';

const CalendarRegisterScreen: FC<RegisterEmotionCalendarType> = ({ navigation }) => {

  const styleMirror = makeMirrorScreenStyles();
  const styleCalendar = makeCalendarCardContainerStyles();

  const gap = 16;
  const emotions = Object.values(emociones);
  const times = Object.values(horarios);
  const [currentDate, setCurrentDate] = useState('');
  const [timeSelected, setTimeSelected] = useState('');
  const [emotionSelected, setEmotionSelected] = useState('');
  const [dateHeader, setDateHeader] = useState('');
  const emotionToRegister: CalendarioItemType = {
    dia: currentDate,
    emocion: emotionSelected,
    horario: timeSelected
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

  const registerNewEmotionItemCalendar = () => {
    // useCreateEmotionTodayByUser()

    console.log(emotionToRegister);
  }

  useEffect(() => {
    moment.locale('es');
    setDateHeader(moment().format('D [de] MMMM, YYYY'));
    setCurrentDate(moment().format('YYYY-MM-DD'));
  }, []);

  return (
    <>
      <View style={styleMirror.containerView}>
        <Text style={{ alignSelf: 'center' }} fontSize={20}>{dateHeader}</Text>
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
        <Button mb={4} rounded={8} style={{ width: 120 }} color="#000000" bg="#ee3964" onPress={registerNewEmotionItemCalendar}>
          ACEPTAR
        </Button>
      </View>
    </>
  );
};

export default CalendarRegisterScreen;