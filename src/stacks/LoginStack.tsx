import React from 'react';
import {LoginRoutes, LoginStackNavigator} from './LoginParams';
import HomeStack from './Homestack';
import {HeaderBack} from '../components';
import {LoginScreen, LoadingScreen, RegisterScreen} from '../screens';

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
