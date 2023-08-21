import React, { FC } from 'react';
import { FeedbackPosMirrorRuletaType, HomeRoutes } from '../../stacks/HomeParams';
import { FeedbackView } from '../../components';

const FeedbackPosMirrorRuletaScreen: FC<FeedbackPosMirrorRuletaType> = ({
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
        navigation.navigate(HomeRoutes.INSIGNIAS);
      }}
      title="Felicitaciones"
      description="Excelente trabajo, ganaste una medalla!"
    />
  );
};

export default FeedbackPosMirrorRuletaScreen;