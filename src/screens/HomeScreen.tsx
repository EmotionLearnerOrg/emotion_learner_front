/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {ScrollView} from 'react-native';
import {makeHomeScreenStyles} from './HomeScreen.style';
import SelectorGameSection from '../components/Home/SelectorGameSection/SelectorGameSection';
import CalendarCardSection from '../components/Home/CalendarCardSection/CalendarCardSection';
import InsigniasAccessSection from '../components/Home/InsigniasAccessSection/InsigniasAccessSection';
import HeaderSection from '../components/Home/HeaderSection/HeaderSection';

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
