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
import {saveInsigniaByUser} from '../../services/insignia/insignia.service';
import {Button} from 'react-native-magnus';
import {useUserData} from '../../contexts/UserDataProvider';
import {InsigniasTypeNames} from '../../types/insignias';

const HomeScreen: FC<HomeType> = ({navigation}) => {
  const style = makeHomeScreenStyles();
  const {uid, updateInsignias} = useUserData();

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

  const pruebaDeMeterData = ({
    idinsignia,
  }: {
    idinsignia: InsigniasTypeNames;
  }) => {
    saveInsigniaByUser({
      uid: uid,
      idInsignia: idinsignia,
      updateProv: updateInsignias,
    });
  };

  return (
    <ScrollView style={style.containerView}>
      <HeaderSection />
      <Button
        bg="green"
        rounded={16}
        onPress={() => pruebaDeMeterData({idinsignia: 'enojado'})}>
        <Text>Estoy enojado</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        onPress={() => pruebaDeMeterData({idinsignia: 'feliz'})}>
        <Text>Estoy feliz</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        onPress={() => pruebaDeMeterData({idinsignia: 'neutral'})}>
        <Text>Estoy neutral</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        onPress={() => pruebaDeMeterData({idinsignia: 'sorprendido'})}>
        <Text>Estoy sorprendido</Text>
      </Button>
      <Button
        bg="green"
        rounded={16}
        onPress={() => pruebaDeMeterData({idinsignia: 'triste'})}>
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
