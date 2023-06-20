import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
// import HomeStack from './src/stacks/Homestack';
import LoginStack from './src/stacks/LoginStack';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
}

export default App;
