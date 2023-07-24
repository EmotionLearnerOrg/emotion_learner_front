import React, { FC } from 'react';
import { ScrollView, Text } from 'react-native';
import { makeHomeScreenStyles } from './HomeScreen.style';
import { HomeRoutes, HomeType } from '../../stacks/HomeParams';
import { Button } from 'react-native-magnus';
import { insigniasEnum } from '../../types/insignias';
import { useUserData } from '../../contexts';
import {
  CalendarCardSection,
  HeaderSection,
  SelectorGameSection,
  InsigniasAccessSection,
} from '../../components';

const HomeScreen: FC<HomeType> = ({ navigation }) => {
  const style = makeHomeScreenStyles();
  const { updateInsignias, isLoadingPostInsignias } = useUserData();

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

  const goToProfile = () => {
    navigation.navigate(HomeRoutes.PROFILE);
  };

  return (
    <ScrollView style={style.containerView}>
      <HeaderSection goToProfile={goToProfile} />
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => {
          updateInsignias({ idInsignia: insigniasEnum.SORPRENDIDO });
        }}>
        <Text>PRUEBA CON MUTATION</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => updateInsignias({ idInsignia: insigniasEnum.ENOJADO })}>
        <Text>Estoy enojado</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => updateInsignias({ idInsignia: insigniasEnum.FELIZ })}>
        <Text>Estoy feliz</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => updateInsignias({ idInsignia: insigniasEnum.NEUTRAL })}>
        <Text>Estoy neutral</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() =>
          updateInsignias({ idInsignia: insigniasEnum.SORPRENDIDO })
        }>
        <Text>Estoy sorprendido</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => updateInsignias({ idInsignia: insigniasEnum.TRISTE })}>
        <Text>Estoy triste</Text>
      </Button>
      <SelectorGameSection
        goToMirror={goToMirror}
        goToRuleta={goToRuleta}
        goToAsociation={goToAsociation}
      />
      <InsigniasAccessSection goToInsignias={goToInsignias} />
      {/* Lo paso abajo solo por comodidad del desarrollo de las insigniasLo paso abajo solo por comodidad del desarrollo de las insignias */}
      <CalendarCardSection goToCalendar={goToCalendar} goToRegisterEmotionCalendar={goToRegisterEmotionCalendar} />
    </ScrollView>
  );
};

export default HomeScreen;
