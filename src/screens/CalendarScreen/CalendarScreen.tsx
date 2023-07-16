import React, { useState, useEffect, useCallback } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Agenda, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { Button, Text } from 'react-native-magnus';
import { makeCalendarScreenStyles } from './CalendarScreen.style';
import { useGetCalendarByUser } from '../../hooks/calendar';
import { useUserAuth } from '../../contexts';
import { convertToAgendaSchedule } from '../../types/calendario';

const CalendarScreen: React.FC = () => {
  const [items, setItems] = useState<any>({});
  const style = makeCalendarScreenStyles();
  const colorMapping: { [key: string]: string } = { feliz: '#FDFF49', triste: '#65ADFC', enojado: '#FC4D4A', sorprendido: '#BBBBBB', neutral: '#88EA5A' };
  const { uid } = useUserAuth();
  const { data: calendar } = useGetCalendarByUser({ uid: uid });

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    // Implemento eventos de ejemplos, hay que ir a buscarlo a la bdd de firebase
    if (calendar) {
      const convertedSchedule: AgendaSchedule = convertToAgendaSchedule(calendar);
      setItems(convertedSchedule);
    }
  };

  const renderItem = useCallback((item: AgendaEntry) => {
    const backgroundColor = colorMapping[item.name] || 'lightblue';
    return (
      <Card style={[style.item, { backgroundColor }]}>
        <Card.Content style={style.cardContent}>
          <Text style={style.itemText}>{item.name}</Text>
        </Card.Content>
      </Card>
    );
  }, []);

  return (
    <View style={style.container}>
      <View style={style.agendaContainer}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          showClosingKnob={true}
          refreshing={false}
          renderItem={renderItem}
          scrollEnabled={false}
          pagingEnabled={true}
          disableMonthChange={false}
        />
      </View>
      <View style={style.buttonContainer}>
        <Button style={style.button} >
          Registrar nueva emocion
        </Button>
      </View>
    </View >
  );
};

export default CalendarScreen;
