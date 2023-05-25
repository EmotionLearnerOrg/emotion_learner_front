import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RuletaScreen from '../screens/RuletaScreen/RuletaScreen';
import MirrorScreen from '../screens/MirrorScreen/MirrorScreen';
import AsociationScreen from '../screens/AsociationScreen/AsociationScreen';
import InsigniasScreen from '../screens/InsigniasScreen/InsigniasScreen';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen';
import HeaderCommon from '../components/HeaderCommon/HeaderCommon';
import TabsNavigation from './TabNavigator';
import PerformEmotionScreen from '../screens/PerformEmotionScreen/PerformEmotionScreen';

export enum HomeRoutes {
  HOME_S = 'Home',
  RULETA = 'Ruleta',
  MIRROR = 'Mirror',
  ASOCIATION = 'Asociation',
  INSIGNIAS = 'Insignias',
  CALENDAR = 'Calendar',
  PERFORM_EMOTION = 'PerformEmotion',
}

export type HomeStackParamList = {
  [HomeRoutes.HOME_S]: undefined;
  [HomeRoutes.RULETA]: undefined;
  [HomeRoutes.MIRROR]: undefined;
  [HomeRoutes.ASOCIATION]: undefined;
  [HomeRoutes.INSIGNIAS]: undefined;
  [HomeRoutes.CALENDAR]: undefined;
  [HomeRoutes.PERFORM_EMOTION]: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName={HomeRoutes.HOME_S}
      screenOptions={{headerShown: true, header: () => <HeaderCommon />}}>
      <HomeStackNavigator.Screen
        name={HomeRoutes.HOME_S}
        component={TabsNavigation}
        options={{headerShown: false}}
      />
      <HomeStackNavigator.Screen
        name={HomeRoutes.RULETA}
        component={RuletaScreen}
      />
      <HomeStackNavigator.Screen
        name={HomeRoutes.MIRROR}
        component={MirrorScreen}
      />
      <HomeStackNavigator.Screen
        name={HomeRoutes.ASOCIATION}
        component={AsociationScreen}
      />
      <HomeStackNavigator.Screen
        name={HomeRoutes.INSIGNIAS}
        component={InsigniasScreen}
      />
      <HomeStackNavigator.Screen
        name={HomeRoutes.CALENDAR}
        component={CalendarScreen}
      />
      <HomeStackNavigator.Screen
        name={HomeRoutes.PERFORM_EMOTION}
        component={PerformEmotionScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
