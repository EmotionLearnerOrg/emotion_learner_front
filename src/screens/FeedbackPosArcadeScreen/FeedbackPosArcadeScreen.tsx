import React, { FC } from 'react';
import { FeedbackPosArcadeType, HomeRoutes } from '../../stacks/HomeParams';
import { FeedbackView } from '../../components';

const FeedbackPosArcadeScreen: FC<FeedbackPosArcadeType> = ({
  route,
  navigation,
}) => {
  const { emotion, type } = route.params;

  return (
    <FeedbackView
      emotion={emotion}
      type={type}
      success
      goTo={() => {
        navigation.navigate(HomeRoutes.HOME_S);
      }}
      title={`Superaste el arcade de ${emotion?.name}`}
      description="Ganaste una medalla!"
    />
  );
};

export default FeedbackPosArcadeScreen;