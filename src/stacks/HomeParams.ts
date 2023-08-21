import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { emocionType } from '../components';

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
  FEEDBACK_POS_MIRROR_RULETA = 'FeedbackPosMirrorRuleta',
  FEEDBACK_NEG_MIRROR_RULETA = 'FeedbackNegMirrorRuleta',
  FEEDBACK_POS_ASO = 'FeedbackPosAso',
  FEEDBACK_NEG_ASO = 'FeedbackNegAso',
  FEEDBACK_POS_ARCADE = 'FeedbackPosArcade',
  FEEDBACK_NEG_ARCADE = 'FeedbackNegArcade',
  ARCADE = 'Arcade',
}

export type HomeStackParamList = {
  [HomeRoutes.HOME_S]: undefined;
  [HomeRoutes.RULETA]: {
    type: 'Ruleta' | 'Arcade';
  };
  [HomeRoutes.MIRROR]: undefined;
  [HomeRoutes.ASOCIATION]: {
    emotion?: emocionType;
    type: 'Asociacion' | 'Arcade';
  };
  [HomeRoutes.INSIGNIAS]: undefined;
  [HomeRoutes.CALENDAR]: undefined;
  [HomeRoutes.PERFORM_EMOTION]: {
    emotion: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  };
  [HomeRoutes.GUIDE_FEEL]: { emotion: emocionType };
  [HomeRoutes.REAL_FEEL]: { emotion: emocionType };
  [HomeRoutes.LOG_IN]: undefined;
  [HomeRoutes.REGISTEREMOTIONCALENDAR]: undefined;
  [HomeRoutes.PROFILE]: undefined;
  [HomeRoutes.FEEDBACK_POS_MIRROR_RULETA]: {
    emotion?: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  };
  [HomeRoutes.FEEDBACK_NEG_MIRROR_RULETA]: {
    emotion: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  };
  [HomeRoutes.FEEDBACK_POS_ARCADE]: {
    emotion?: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  };
  [HomeRoutes.FEEDBACK_NEG_ARCADE]: {
    emotion: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
  };
  [HomeRoutes.FEEDBACK_POS_ASO]: {
    emotion?: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
    aciertos: number;
  };
  [HomeRoutes.FEEDBACK_NEG_ASO]: {
    emotion: emocionType;
    type: 'Mirror' | 'Ruleta' | 'Arcade' | 'Asociacion';
    aciertos: number;
  };
  [HomeRoutes.ARCADE]: undefined;
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

type AsociationRouteType = RouteProp<HomeStackParamList, HomeRoutes.ASOCIATION>;

export type AsociationType = {
  navigation: HomeStackNavigationsProp;
  route: AsociationRouteType;
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

type FeedbackPosMirrorRuletaScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.FEEDBACK_POS_MIRROR_RULETA
>;

export type FeedbackPosMirrorRuletaType = {
  navigation: HomeStackNavigationsProp;
  route: FeedbackPosMirrorRuletaScreenRouteType;
};

type FeedbackNegMirrorRuletaScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.FEEDBACK_NEG_MIRROR_RULETA
>;

type FeedbackPosAsoScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.FEEDBACK_POS_ASO
>;

export type FeedbackPosAsoType = {
  navigation: HomeStackNavigationsProp;
  route: FeedbackPosAsoScreenRouteType;
};

type FeedbackNegAsoScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.FEEDBACK_NEG_ASO
>;

export type FeedbackNegAsoType = {
  navigation: HomeStackNavigationsProp;
  route: FeedbackNegAsoScreenRouteType;
};
type FeedbackPosArcadeScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.FEEDBACK_POS_ARCADE
>;

export type FeedbackPosArcadeType = {
  navigation: HomeStackNavigationsProp;
  route: FeedbackPosArcadeScreenRouteType;
};

type FeedbackNegArcadeScreenRouteType = RouteProp<
  HomeStackParamList,
  HomeRoutes.FEEDBACK_NEG_ARCADE
>;

export type FeedbackNegArcadeType = {
  navigation: HomeStackNavigationsProp;
  route: FeedbackNegArcadeScreenRouteType;
};

export type FeedbackNegMirrorRuletaType = {
  navigation: HomeStackNavigationsProp;
  route: FeedbackNegMirrorRuletaScreenRouteType;
};

export type ArcadeType = {
  navigation: HomeStackNavigationsProp;
  route: ArcadeRouteType;
};

type ArcadeRouteType = RouteProp<HomeStackParamList, HomeRoutes.ARCADE>;

export const HomeStackNavigator = createNativeStackNavigator<HomeStackParamList>();