import React, {FC} from 'react';
import {FeedbackNegAsoType, HomeRoutes} from '../../stacks/HomeParams';
import {FeedbackView} from '../../components';

const FeedbackNegAsoScreen: FC<FeedbackNegAsoType> = ({route, navigation}) => {
  const {emotion, type, aciertos} = route.params;
  return (
    <FeedbackView
      emotion={emotion}
      type={type}
      success={false}
      goTo={() => {
        navigation.navigate(HomeRoutes.ASOCIATION, {type: 'Asociacion'});
      }}
      title={`¡Inténtalo otra vez!`}
      description={`Lograste ${aciertos} de 5 aciertos`}
    />
  );
};

export default FeedbackNegAsoScreen;
