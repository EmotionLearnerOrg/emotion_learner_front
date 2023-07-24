import React, {FC, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {makeLoadingScreenStyle} from './LoadingScreen.style';
import {LoadingType, LoginRoutes} from '../../stacks/LoginParams';
import {useFocusEffect} from '@react-navigation/native';
import {useUserAuth} from '../../contexts';
import {EmotionPerson} from '../../../assets';

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
      <Image
        source={EmotionPerson}
        style={{
          alignSelf: 'center',
          resizeMode: 'contain',
        }}
      />
      <Text style={style.title}>Mi Mundo Emocional</Text>
    </View>
  );
};

export default LoadingScreen;
