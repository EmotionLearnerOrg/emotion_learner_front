import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';
import RuletaScreen from '../screens/RuletaScreen/RuletaScreen';
import MirrorScreen from '../screens/MirrorScreen/MirrorScreen';
import AsociationScreen from '../screens/AsociationScreen/AsociationScreen';
import InsigniasScreen from '../screens/InsigniasScreen/InsigniasScreen';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen';

export enum HomeRoutes {
  HOME_S = 'HomeS',
  RULETA = 'Ruleta',
  MIRROR = 'Mirror',
  ASOCIATION = 'Asociation',
  INSIGNIAS = 'Insignias',
  CALENDAR = 'Calendar',
}

export type HomeStackParamList = {
  [HomeRoutes.HOME_S]: undefined;
  [HomeRoutes.RULETA]: undefined;
  [HomeRoutes.MIRROR]: undefined;
  [HomeRoutes.ASOCIATION]: undefined;
  [HomeRoutes.INSIGNIAS]: undefined;
  [HomeRoutes.CALENDAR]: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName={HomeRoutes.HOME_S}
      screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen
        name={HomeRoutes.HOME_S}
        component={HomeScreen}
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
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
