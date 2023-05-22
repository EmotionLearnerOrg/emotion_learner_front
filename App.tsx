import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import TabsNavigation from './src/stacks/TabNavigator';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <TabsNavigation />;
}

export default App;
