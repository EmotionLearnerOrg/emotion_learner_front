import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {makeHomeScreenStyles} from './HomeScreen.style';
import {HomeRoutes, HomeType} from '../../stacks/HomeParams';
import {
  CalendarCardSection,
  HeaderSection,
  SelectorGameSection,
  InsigniasAccessSection,
} from '../../components';

const HomeScreen: FC<HomeType> = ({navigation}) => {
  const style = makeHomeScreenStyles();

  const goToMirror = () => {
    navigation.navigate(HomeRoutes.MIRROR);
  };

  const goToRuleta = () => {
    navigation.navigate(HomeRoutes.RULETA, {
      type: 'Ruleta',
    });
  };

  const goToAsociation = () => {
    navigation.navigate(HomeRoutes.ASOCIATION, {
      type: 'Asociacion',
    });
  };

  const goToInsignias = () => {
    navigation.navigate(HomeRoutes.INSIGNIAS);
  };

  const goToCalendar = () => {
    navigation.navigate(HomeRoutes.CALENDAR);
  };

  const goToRegisterEmotionCalendar = () => {
    navigation.navigate(HomeRoutes.REGISTEREMOTIONCALENDAR);
  };

  const goToProfile = () => {
    navigation.navigate(HomeRoutes.PROFILE);
  };
  const goToArcade = () => {
    navigation.navigate(HomeRoutes.ARCADE);
  };

  return (
    <ScrollView style={style.containerView}>
      <HeaderSection goToProfile={goToProfile} />
      <SelectorGameSection
        goToMirror={goToMirror}
        goToRuleta={goToRuleta}
        goToAsociation={goToAsociation}
        goToArcade={goToArcade}
      />
      <CalendarCardSection
        goToCalendar={goToCalendar}
        goToRegisterEmotionCalendar={goToRegisterEmotionCalendar}
      />
      <InsigniasAccessSection goToInsignias={goToInsignias} />
    </ScrollView>
  );
};

export default HomeScreen;
