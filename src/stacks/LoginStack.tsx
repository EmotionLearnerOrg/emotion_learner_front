import React from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import {LoginRoutes, LoginStackNavigator} from './LoginParams';
import HomeStack from './Homestack';
import HeaderBack from '../components/HeaderBack/HeaderBack';
import LoadingScreen from '../screens/LoadingScreen/LoadingScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';

const LoginStack = () => {
  return (
    <LoginStackNavigator.Navigator
      initialRouteName={LoginRoutes.LOADING}
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStackNavigator.Screen
        name={LoginRoutes.HOME_LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <LoginStackNavigator.Screen
        name={LoginRoutes.HOME_APP}
        component={HomeStack}
        options={{headerShown: false}}
      />
      <LoginStackNavigator.Screen
        name={LoginRoutes.LOADING}
        component={LoadingScreen}
        options={{headerShown: false}}
      />
      <LoginStackNavigator.Screen
        name={LoginRoutes.REGISTER}
        options={{headerShown: true, header: () => <HeaderBack />}}
        component={RegisterScreen}
      />
    </LoginStackNavigator.Navigator>
  );
};

export default LoginStack;
