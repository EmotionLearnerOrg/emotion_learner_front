import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {makeFeedbackNegScreenStyles} from './FeedbackNegScreen.style';
import {Button, Text} from 'react-native-magnus';
import {FeedbackNegType, HomeRoutes} from '../../stacks/HomeParams';

const FeedbackNegScreen: FC<FeedbackNegType> = ({route, navigation}) => {
  const {emotion} = route.params;

  const style = makeFeedbackNegScreenStyles();

  return (
    <View style={style.containerView}>
      <Text fontSize={18} textAlign="center" mt={20}>
        No pudimos reconocer la expresión {emotion.name}, probá nuevamente!
      </Text>
      <Text fontSize={18} textAlign="center" mt={20}>
        Sugerencias:
      </Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Image source={emotion.pathGuia} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
      </View>
      <View style={style.calendarCardContainer}>
        <Button
          onPress={() =>
            navigation.navigate(HomeRoutes.REAL_FEEL, {emotion: emotion})
          }>
          Volver a intentar
        </Button>
      </View>
    </View>
  );
};

export default FeedbackNegScreen;
