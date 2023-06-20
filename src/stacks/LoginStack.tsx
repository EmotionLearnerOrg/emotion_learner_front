import React from 'react';
import LoginScreen from '../screens/Account/LoginScreen';
import RegisterScreen from '../screens/Account/RegisterScreen';
import {LoginRoutes, LoginStackNavigator} from './LoginParams';
import HomeStack from './Homestack';

const LoginStack = () => {
  return (
    <LoginStackNavigator.Navigator
      initialRouteName={LoginRoutes.HOME_LOGIN}
      screenOptions={{
        headerShown: false,
        // , header: () => <HeaderCommon />
      }}>
      <LoginStackNavigator.Screen
        name={LoginRoutes.HOME_LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <LoginStackNavigator.Screen
        name={LoginRoutes.HOME}
        component={HomeStack}
        options={{headerShown: false}}
      />
      {/* <LoginStackNavigator.Screen
        name={LoginRoutes.LOGIN}
        component={LoginScreen}
      /> */}
      <LoginStackNavigator.Screen
        name={LoginRoutes.REGISTER}
        component={RegisterScreen}
      />
    </LoginStackNavigator.Navigator>
  );
};

export default LoginStack;
