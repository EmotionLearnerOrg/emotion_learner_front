import React from 'react';
import {HomeRoutes, HomeStackNavigator} from './HomeParams';
import {UserDataProvider} from '../contexts';
import {
  RuletaScreen,
  MirrorScreen,
  AsociationScreen,
  InsigniasScreen,
  CalendarScreen,
  PerformEmotionScreen,
  GuideFeelScreen,
  RealFeelScreen,
  CalendarRegisterScreen,
  HomeScreen,
  ProfileScreen,
  FeedbackPosScreen,
  FeedbackNegScreen,
} from '../screens';
import {HeaderCommon} from '../components';

const HomeStack = () => {
  return (
    <UserDataProvider>
      <HomeStackNavigator.Navigator
        initialRouteName={HomeRoutes.HOME_S}
        screenOptions={{headerShown: true, header: () => <HeaderCommon />}}>
        <HomeStackNavigator.Screen
          name={HomeRoutes.HOME_S}
          component={HomeScreen}
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
        <HomeStackNavigator.Screen
          name={HomeRoutes.GUIDE_FEEL}
          component={GuideFeelScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.REAL_FEEL}
          component={RealFeelScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.REGISTEREMOTIONCALENDAR}
          component={CalendarRegisterScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.PROFILE}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.FEEDBACK_POS}
          component={FeedbackPosScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.FEEDBACK_NEG}
          component={FeedbackNegScreen}
        />
      </HomeStackNavigator.Navigator>
    </UserDataProvider>
  );
};

export default HomeStack;
