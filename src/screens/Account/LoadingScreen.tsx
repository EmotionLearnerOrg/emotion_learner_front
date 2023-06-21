import React, {FC, useEffect} from 'react';
import {View, Text} from 'react-native';
import {makeAccountScreensStyle} from './AccountScreens.style';
import useDataUser from '../../hooks/useDataUser';
import {LoadingType, LoginRoutes} from '../../stacks/LoginParams';
import {useFocusEffect} from '@react-navigation/native';

const LoadingScreen: FC<LoadingType> = ({navigation}) => {
  const style = makeAccountScreensStyle();
  const {loggedIn} = useDataUser();
  console.log('LoadingScreen', LoadingScreen);

  const checkWhereToGo = React.useCallback(() => {
    console.log('loggedIn', loggedIn);

    if (loggedIn) {
      navigation.navigate(LoginRoutes.HOME_APP);
    } else if (loggedIn === false) {
      console.log('viniste??');
      navigation.navigate(LoginRoutes.HOME_LOGIN);
    }
  }, [loggedIn, navigation]);
  useEffect(() => {
    checkWhereToGo();
  }, [checkWhereToGo, loggedIn, navigation]);

  useFocusEffect(
    React.useCallback(() => {
      checkWhereToGo();
    }, [checkWhereToGo]),
  );

  return (
    <View style={style.container}>
      <Text style={style.title}>Loading</Text>
    </View>
  );
};

export default LoadingScreen;
