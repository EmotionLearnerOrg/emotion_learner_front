import React, {FC} from 'react';
import {FeedbackPosAsoType, HomeRoutes} from '../../stacks/HomeParams';
import {FeedbackView} from '../../components';

const FeedbackPosArcadeScreen: FC<FeedbackPosAsoType> = ({
  route,
  navigation,
}) => {
  const {emotion, type} = route.params;

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
