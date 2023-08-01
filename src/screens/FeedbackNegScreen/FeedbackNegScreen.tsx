import React, {FC} from 'react';
import {FeedbackNegType, HomeRoutes} from '../../stacks/HomeParams';
import {FeedbackView} from '../../components';

const FeedbackNegScreen: FC<FeedbackNegType> = ({route, navigation}) => {
  const {emotion, type} = route.params;
  return (
    <FeedbackView
      emotion={emotion}
      type={type}
      success={false}
      goTo={() => {
        navigation.navigate(HomeRoutes.REAL_FEEL, {...route.params});
      }}
    />
  );
};

export default FeedbackNegScreen;
