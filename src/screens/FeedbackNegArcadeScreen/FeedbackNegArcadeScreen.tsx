import React, {FC} from 'react';
import {FeedbackNegAsoType, HomeRoutes} from '../../stacks/HomeParams';
import {FeedbackView} from '../../components';

const FeedbackNegArcadeScreen: FC<FeedbackNegAsoType> = ({
  route,
  navigation,
}) => {
  const {emotion, type, aciertos} = route.params;
  return (
    <FeedbackView
      emotion={emotion}
      type={type}
      success={false}
      goTo={() => {
        navigation.navigate(HomeRoutes.REAL_FEEL, {...route.params});
      }}
      title={`Acertaste ${aciertos}/5   :(`}
      description="Queres volver a intentar?"
    />
  );
};

export default FeedbackNegArcadeScreen;
