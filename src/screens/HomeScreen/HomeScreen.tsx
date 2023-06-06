import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {makeHomeScreenStyles} from './HomeScreen.style';
import {
  CalendarCardSection,
  HeaderSection,
  InsigniasAccessSection,
  SelectorGameSection,
} from './../../components/Home';
import {HomeRoutes, HomeType} from '../../stacks/HomeParams';

const HomeScreen: FC<HomeType> = ({navigation}) => {
  const style = makeHomeScreenStyles();

  const goToMirror = () => {
    navigation.navigate(HomeRoutes.MIRROR);
  };

  const goToRuleta = () => {
    navigation.navigate(HomeRoutes.RULETA);
  };

  const goToAsociation = () => {
    navigation.navigate(HomeRoutes.ASOCIATION);
  };

  const goToInsignias = () => {
    navigation.navigate(HomeRoutes.INSIGNIAS);
  };

  const goToCalendar = () => {
    navigation.navigate(HomeRoutes.CALENDAR);
  };

  return (
    <ScrollView style={style.containerView}>
      <HeaderSection />
      <SelectorGameSection
        goToMirror={goToMirror}
        goToRuleta={goToRuleta}
        goToAsociation={goToAsociation}
      />
      <CalendarCardSection goToCalendar={goToCalendar} />
      <InsigniasAccessSection goToInsignias={goToInsignias} />
    </ScrollView>
  );
};

export default HomeScreen;
