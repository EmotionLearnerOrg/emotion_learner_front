import { RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

export enum LoginRoutes {
  HOME_LOGIN = 'HomeLogin',
  HOME_APP = 'HomeApp',
  REGISTER = 'Register',
  LOADING = 'Loading',
}

export type LoginStackParamList = {
  [LoginRoutes.HOME_LOGIN]: undefined;
  [LoginRoutes.HOME_APP]: undefined;
  [LoginRoutes.REGISTER]: undefined;
  [LoginRoutes.LOADING]: undefined;
};

export type LoginStackNavigationsProp =
  StackNavigationProp<LoginStackParamList>;

type HomeLoginScreenRouteType = RouteProp<
  LoginStackParamList,
  LoginRoutes.HOME_LOGIN
>;

export type HomeLoginType = {
  navigation: LoginStackNavigationsProp;
  route: HomeLoginScreenRouteType;
};

type RegisterScreenRouteType = RouteProp<
  LoginStackParamList,
  LoginRoutes.REGISTER
>;

export type RegisterType = {
  navigation: LoginStackNavigationsProp;
  route: RegisterScreenRouteType;
};

type LoadingScreenRouteType = RouteProp<
  LoginStackParamList,
  LoginRoutes.LOADING
>;

export type LoadingType = {
  navigation: LoginStackNavigationsProp;
  route: LoadingScreenRouteType;
};

export const LoginStackNavigator =
  createNativeStackNavigator<LoginStackParamList>();
