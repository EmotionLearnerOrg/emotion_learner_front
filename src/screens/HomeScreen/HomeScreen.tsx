import React from 'react';
import {ScrollView} from 'react-native';
import {makeHomeScreenStyles} from './HomeScreen.style';
import {
  CalendarCardSection,
  HeaderSection,
  InsigniasAccessSection,
  SelectorGameSection,
} from './../../components/Home';

const HomeScreen = () => {
  const style = makeHomeScreenStyles();
  return (
    <ScrollView style={style.containerView}>
      <HeaderSection />
      <SelectorGameSection />
      <CalendarCardSection />
      <InsigniasAccessSection />
    </ScrollView>
  );
};

export default HomeScreen;
