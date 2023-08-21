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
  FeedbackPosMirrorRuletaScreen,
  FeedbackNegMirrorRuletaScreen,
  ArcadeScreen,
  FeedbackNegAsoScreen,
  FeedbackPosAsoScreen,
} from '../screens';
import {HeaderCommon} from '../components';
import FeedbackPosArcadeScreen from '../screens/FeedbackPosArcadeScreen/FeedbackPosArcadeScreen';
import FeedbackNegArcadeScreen from '../screens/FeedbackNegArcadeScreen/FeedbackNegArcadeScreen';

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
          initialParams={{type: 'Ruleta'}}
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
          name={HomeRoutes.FEEDBACK_POS_MIRROR_RULETA}
          component={FeedbackPosMirrorRuletaScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.FEEDBACK_NEG_MIRROR_RULETA}
          component={FeedbackNegMirrorRuletaScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.FEEDBACK_POS_ASO}
          component={FeedbackPosAsoScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.FEEDBACK_NEG_ASO}
          component={FeedbackNegAsoScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.ARCADE}
          component={ArcadeScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.FEEDBACK_POS_ARCADE}
          component={FeedbackPosArcadeScreen}
        />
        <HomeStackNavigator.Screen
          name={HomeRoutes.FEEDBACK_NEG_ARCADE}
          component={FeedbackNegArcadeScreen}
        />
      </HomeStackNavigator.Navigator>
    </UserDataProvider>
  );
};

export default HomeStack;
