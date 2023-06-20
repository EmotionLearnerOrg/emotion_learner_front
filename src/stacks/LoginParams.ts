import {RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';

export enum LoginRoutes {
  HOME_LOGIN = 'HomeLogin',
  HOME = 'Home',
  // LOGIN = 'Login',
  REGISTER = 'Register',
}

export type LoginStackParamList = {
  [LoginRoutes.HOME_LOGIN]: undefined;
  [LoginRoutes.HOME]: undefined;
  [LoginRoutes.REGISTER]: undefined;
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

export const LoginStackNavigator =
  createNativeStackNavigator<LoginStackParamList>();
