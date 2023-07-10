import React from 'react';
import RuletaScreen from '../screens/RuletaScreen/RuletaScreen';
import MirrorScreen from '../screens/MirrorScreen/MirrorScreen';
import AsociationScreen from '../screens/AsociationScreen/AsociationScreen';
import InsigniasScreen from '../screens/InsigniasScreen/InsigniasScreen';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen';
import HeaderCommon from '../components/HeaderCommon/HeaderCommon';
import TabsStack from './TabStack';
import PerformEmotionScreen from '../screens/PerformEmotionScreen/PerformEmotionScreen';
import GuideFeelScreen from '../screens/GuideFeelScreen/GuideFeelScreen';
import RealFeelScreen from '../screens/RealFeelScreen/RealFeelScreen';
import FeedbackPosScreen from '../screens/FeedbackPosScreen/FeedbackPosScreen';
import FeedbackNegScreen from '../screens/FeedbackNegScreen/FeedbackNegScreen';
import {HomeRoutes, HomeStackNavigator} from './HomeParams';

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName={HomeRoutes.HOME_S}
      screenOptions={{headerShown: true, header: () => <HeaderCommon />}}>
      <HomeStackNavigator.Screen
        name={HomeRoutes.HOME_S}
        component={TabsStack}
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
        name={HomeRoutes.FEEDBACK_POS}
        component={FeedbackPosScreen}
      />
      <HomeStackNavigator.Screen
        name={HomeRoutes.FEEDBACK_NEG}
        component={FeedbackNegScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
