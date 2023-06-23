import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/stacks/LoginStack';
import {UserDataProvider} from './src/contexts/UserDataProvider';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <UserDataProvider>
        <LoginStack />
      </UserDataProvider>
    </NavigationContainer>
  );
}

export default App;
