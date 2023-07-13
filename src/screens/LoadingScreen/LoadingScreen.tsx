import React, {FC, useEffect} from 'react';
import {View, Text} from 'react-native';
import {makeLoadingScreenStyle} from './LoadingScreen.style';
import {LoadingType, LoginRoutes} from '../../stacks/LoginParams';
import {useFocusEffect} from '@react-navigation/native';
import {useUserAuth} from '../../contexts';

const LoadingScreen: FC<LoadingType> = ({navigation}) => {
  const style = makeLoadingScreenStyle();
  const {initData, loggedIn} = useUserAuth();

  const checkWhereToGo = React.useCallback(() => {
    if (loggedIn) {
      navigation.navigate(LoginRoutes.HOME_APP);
    } else if (loggedIn === false) {
      navigation.navigate(LoginRoutes.HOME_LOGIN);
    }
  }, [loggedIn, navigation]);

  useEffect(() => {
    initData();
    return () => {};
  }, [initData]);

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
