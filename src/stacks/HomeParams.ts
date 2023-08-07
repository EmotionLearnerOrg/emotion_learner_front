import {RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {emocionType} from '../components';

export enum HomeRoutes {
  HOME_S = 'Home',
  RULETA = 'Ruleta',
  MIRROR = 'Mirror',
  ASOCIATION = 'Asociation',
  INSIGNIAS = 'Insignias',
  CALENDAR = 'Calendar',
  REGISTEREMOTIONCALENDAR = 'RegisterEmotionCalendar',
  PERFORM_EMOTION = 'PerformEmotion',
  GUIDE_FEEL = 'GuideFeal',
  REAL_FEEL = 'RealFeel',
  LOG_IN = 'HomeLogin',
  PROFILE = 'Profile',
  FEEDBACK_POS = 'FeedbackPos',
  FEEDBACK_NEG = 'FeedbackNeg',
}

export type HomeStackParamList = {
  [HomeRoutes.HOME_S]: undefined;
  [HomeRoutes.RULETA]: undefined;
  [HomeRoutes.MIRROR]: undefined;
  [HomeRoutes.ASOCIATION]: undefined;
  [HomeRoutes.INSIGNIAS]: undefined;
  [HomeRoutes.CALENDAR]: undefined;
  [HomeRoutes.PERFORM_EMOTION]: {
    emotion: emocionType;
    type: 'Mirror' | 'Ruleta';
  };
  [HomeRoutes.GUIDE_FEEL]: {emotion: emocionType};
  [HomeRoutes.REAL_FEEL]: {emotion: emocionType};
  [HomeRoutes.LOG_IN]: undefined;
  [HomeRoutes.REGISTEREMOTIONCALENDAR]: undefined;
  [HomeRoutes.PROFILE]: undefined;
  [HomeRoutes.FEEDBACK_POS]: {
    emotion: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  };
  [HomeRoutes.FEEDBACK_NEG]: {
    emotion: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  };
};

export type HomeStackNavigationsProp = StackNavigationProp<HomeStackParamList>;

type RuletaScreenRouteType = RouteProp<HomeStackParamList, HomeRoutes.RULETA>;

export type RuletaType = {
  navigation: HomeStackNavigationsProp;
  route: RuletaScreenRouteType;
};

type HomeScreenRouteType = RouteProp<HomeStackParamList, HomeRoutes.HOME_S>;

export type HomeType = {
  navigation: HomeStackNavigationsProp;
  route: HomeScreenRouteType;
};

type GuideFeelScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.GUIDE_FEEL
>;

export type GuideFeelType = {
  navigation: HomeStackNavigationsProp;
  route: GuideFeelScreenRouteType;
};

type RegisterEmotionCalendarRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.REGISTEREMOTIONCALENDAR
>;

export type RegisterEmotionCalendarType = {
  navigation: HomeStackNavigationsProp;
  route: RegisterEmotionCalendarRouteType;
};

type CalendarRouteType = RouteProp<HomeStackParamList, HomeRoutes.CALENDAR>;

export type CalendarType = {
  navigation: HomeStackNavigationsProp;
  route: CalendarRouteType;
};

type MirrorScreenRouteType = RouteProp<HomeStackParamList, HomeRoutes.MIRROR>;

export type MirrorType = {
  navigation: HomeStackNavigationsProp;
  route: MirrorScreenRouteType;
};

type RealFeelScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.REAL_FEEL
>;

export type RealFeelType = {
  navigation: HomeStackNavigationsProp;
  route: RealFeelScreenRouteType;
};

type PerformEmotionScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.PERFORM_EMOTION
>;

export type PerformEmotionType = {
  navigation: HomeStackNavigationsProp;
  route: PerformEmotionScreenRouteType;
};

type ProfileScreenRouteType = RouteProp<HomeStackParamList, HomeRoutes.PROFILE>;

export type ProfileType = {
  navigation: HomeStackNavigationsProp;
  route: ProfileScreenRouteType;
};

type FeedbackPosScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.FEEDBACK_POS
>;

export type FeedbackPosType = {
  navigation: HomeStackNavigationsProp;
  route: FeedbackPosScreenRouteType;
};

type FeedbackNegScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.FEEDBACK_NEG
>;

export type FeedbackNegType = {
  navigation: HomeStackNavigationsProp;
  route: FeedbackNegScreenRouteType;
};

export const HomeStackNavigator =
  createNativeStackNavigator<HomeStackParamList>();
