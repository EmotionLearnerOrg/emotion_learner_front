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
        navigation.navigate(HomeRoutes.ASOCIATION);
      }}
      title={`Acertaste ${aciertos}/5   :(`}
      description="Queres volver a intentar?"
    />
  );
};

export default FeedbackNegAsoScreen;
