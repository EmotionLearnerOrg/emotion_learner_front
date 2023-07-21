import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/stacks/LoginStack';
import {UserAuthProvider} from './src/contexts';
import {
  QueryClient,
  QueryClientProvider as ReactQueryProvider,
} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ReactQueryProvider client={queryClient}>
      <NavigationContainer>
        <UserAuthProvider>
          <LoginStack />
        </UserAuthProvider>
      </NavigationContainer>
    </ReactQueryProvider>
  );
}

export default App;
