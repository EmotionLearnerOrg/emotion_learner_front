import React, {FC} from 'react';
import {FeedbackNegMirrorRuletaType, HomeRoutes} from '../../stacks/HomeParams';
import {FeedbackView} from '../../components';

const FeedbackNegMirrorRuletaScreen: FC<FeedbackNegMirrorRuletaType> = ({
  route,
  navigation,
}) => {
  const {emotion, type} = route.params;

  return (
    <FeedbackView
      emotion={emotion}
      type={type}
      success={false}
      goTo={() => {
        navigation.navigate(HomeRoutes.PERFORM_EMOTION, {...route.params});
      }}
      title={'No pudimos reconocer tu expresión , volvé a intentar!'}
      description={`Sugerencias para expresar ${emotion.name}`}
    />
  );
};

export default FeedbackNegMirrorRuletaScreen;
