import React, {FC} from 'react';
import {FeedbackPosMirrorRuletaType, HomeRoutes} from '../../stacks/HomeParams';
import {FeedbackView} from '../../components';

const FeedbackPosMirrorRuletaScreen: FC<FeedbackPosMirrorRuletaType> = ({
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
        navigation.navigate(HomeRoutes.INSIGNIAS);
      }}
      title="¡Increíble trabajo!"
      description={`¡Ganaste una insignia!`}
    />
  );
};

export default FeedbackPosMirrorRuletaScreen;
