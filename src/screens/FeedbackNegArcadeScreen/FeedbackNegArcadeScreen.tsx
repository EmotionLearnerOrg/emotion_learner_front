import React, { FC } from 'react';
import { FeedbackNegArcadeType, HomeRoutes } from '../../stacks/HomeParams';
import { FeedbackView } from '../../components';

const FeedbackNegArcadeScreen: FC<FeedbackNegArcadeType> = ({
  route,
  navigation,
}) => {
  const { emotion, type } = route.params;
  return (
    <FeedbackView
      emotion={emotion}
      type={type}
      success={false}
      goTo={() => {
        navigation.navigate(HomeRoutes.ARCADE);
      }}
      title={`¡Inténtalo otra vez!`}
      description={`No se pudo completar el modo Arcade`}
    />
  );
};

export default FeedbackNegArcadeScreen;