import React, {FC} from 'react';
import {ScrollView, Text} from 'react-native';
import {makeHomeScreenStyles} from './HomeScreen.style';
import {
  CalendarCardSection,
  HeaderSection,
  InsigniasAccessSection,
  SelectorGameSection,
} from './../../components/Home';
import {HomeRoutes, HomeType} from '../../stacks/HomeParams';
import {Button} from 'react-native-magnus';
import {insigniasEnum} from '../../types/insignias';
import {useUserData} from '../../contexts';

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

  return (
    <ScrollView style={style.containerView}>
      <HeaderSection />
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => {
          updateInsignias({idInsignia: insigniasEnum.SORPRENDIDO});
        }}>
        <Text>PRUEBA CON MUTATION</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => updateInsignias({idInsignia: insigniasEnum.ENOJADO})}>
        <Text>Estoy enojado</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => updateInsignias({idInsignia: insigniasEnum.FELIZ})}>
        <Text>Estoy feliz</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => updateInsignias({idInsignia: insigniasEnum.NEUTRAL})}>
        <Text>Estoy neutral</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() =>
          updateInsignias({idInsignia: insigniasEnum.SORPRENDIDO})
        }>
        <Text>Estoy sorprendido</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        loading={isLoadingPostInsignias}
        onPress={() => updateInsignias({idInsignia: insigniasEnum.TRISTE})}>
        <Text>Estoy triste</Text>
      </Button>
      <SelectorGameSection
        goToMirror={goToMirror}
        goToRuleta={goToRuleta}
        goToAsociation={goToAsociation}
      />
      {/* <CalendarCardSection goToCalendar={goToCalendar} /> */}
      <InsigniasAccessSection goToInsignias={goToInsignias} />
    </ScrollView>
  );
};

export default HomeScreen;
