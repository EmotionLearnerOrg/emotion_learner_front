import React, {FC} from 'react';
import {ScrollView, Text} from 'react-native';
import {makeHomeScreenStyles} from './HomeScreen.style';
import {HomeRoutes, HomeType} from '../../stacks/HomeParams';
import {Button} from 'react-native-magnus';
import {insigniasEnum} from '../../types/insignias';
import {useUserData} from '../../contexts';
import {
  CalendarCardSection,
  HeaderSection,
  SelectorGameSection,
  InsigniasAccessSection,
} from '../../components';

const HomeScreen: FC<HomeType> = ({navigation}) => {
  const style = makeHomeScreenStyles();
  const {updateInsignias, isLoadingPostInsignias} = useUserData();

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

  const goToRegisterEmotionCalendar = () => {
    navigation.navigate(HomeRoutes.REGISTEREMOTIONCALENDAR);
  };
  return (
    <ScrollView style={style.containerView}>
      <HeaderSection />
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() =>
          updateInsignias({idInsignia: insigniasEnum.ARCADE_ENOJADO})
        }>
        <Text>Estoy arcade enojado</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() =>
          updateInsignias({idInsignia: insigniasEnum.MIRROR_NEUTRAL})
        }>
        <Text>Estoy mirror neutral</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() =>
          updateInsignias({idInsignia: insigniasEnum.MIRROR_TRISTE})
        }>
        <Text>Estoy mirror triste</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() =>
          updateInsignias({idInsignia: insigniasEnum.RULETA_FELIZ})
        }>
        <Text>Estoy ruleta feliz</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() =>
          updateInsignias({idInsignia: insigniasEnum.RULETA_TRISTE})
        }>
        <Text>Estoy ruleta triste</Text>
      </Button>
      <SelectorGameSection
        goToMirror={goToMirror}
        goToRuleta={goToRuleta}
        goToAsociation={goToAsociation}
      />
      {/* <CalendarCardSection goToCalendar={goToCalendar} goToRegisterEmotionCalendar={goToRegisterEmotionCalendar} /> */}
      <InsigniasAccessSection goToInsignias={goToInsignias} />
    </ScrollView>
  );
};

export default HomeScreen;
