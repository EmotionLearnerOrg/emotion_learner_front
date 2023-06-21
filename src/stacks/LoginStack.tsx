import React from 'react';
import LoginScreen from '../screens/Account/LoginScreen';
import RegisterScreen from '../screens/Account/RegisterScreen';
import {LoginRoutes, LoginStackNavigator} from './LoginParams';
import HomeStack from './Homestack';
import HeaderBack from '../components/HeaderBack/HeaderBack';
import LoadingScreen from '../screens/Account/LoadingScreen';

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
