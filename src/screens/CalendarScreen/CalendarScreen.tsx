import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Agenda, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { Text } from 'react-native-magnus';
import { makeCalendarScreenStyles } from './CalendarScreen.style';
import { itemsCalendarMocks } from './CalendarScreen.mockup';

const CalendarScreen: React.FC = () => {
  const [items, setItems] = useState<any>({});
  const style = makeCalendarScreenStyles();
  const colorMapping: { [key: string]: string } = { Feliz: '#FDFF49', Triste: '#65ADFC', Enojado: '#FC4D4A', Sorprendido: '#BBBBBB', Neutral: '#88EA5A' };

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    // Implemento eventos de ejemplos, hay que ir a buscarlo a la bdd de firebase
    setItems(itemsCalendarMocks);
  };

  const renderItem = (item: AgendaEntry) => {
    const backgroundColor = colorMapping[item.name] || 'lightblue';
    return (
      <Card style={[style.item, { backgroundColor }]}>
        <Card.Content>
          <View>
            <Text style={{ alignSelf: 'center' }} fontSize={16} >{item.name}</Text>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View style={style.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
        scrollEnabled={false}
        pagingEnabled={false}
        disableMonthChange={false}
      />
      <StatusBar />
    </View>
  );
};

export default CalendarScreen;
