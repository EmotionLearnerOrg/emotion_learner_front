import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import TabsNavigation from './src/stacks/TabNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-magnus';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <TabsNavigation />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
