import React, { FC } from 'react';
import { FeedbackPosAsoType, HomeRoutes } from '../../stacks/HomeParams';
import { FeedbackView } from '../../components';

const FeedbackPosAsoScreen: FC<FeedbackPosAsoType> = ({ route, navigation }) => {
  const { emotion, type, aciertos } = route.params;

  return (
    <FeedbackView
      emotion={emotion}
      type={type}
      success
      goTo={() => {
        navigation.navigate(HomeRoutes.INSIGNIAS);
      }}
      title={`Excelente trabajo, acertaste ${aciertos}/5`}
      description="Ganaste una medalla!"
    />
  );
};

export default FeedbackPosAsoScreen;