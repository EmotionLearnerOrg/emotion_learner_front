import React, {FC} from 'react';
import {FeedbackPosType, HomeRoutes} from '../../stacks/HomeParams';
import {FeedbackView} from '../../components';

const FeedbackPosScreen: FC<FeedbackPosType> = ({route, navigation}) => {
  const {emotion, type} = route.params;
  return (
    <FeedbackView
      emotion={emotion}
      type={type}
      success
      goTo={() => {
        navigation.navigate(HomeRoutes.HOME_S);
      }}
    />
  );
};

export default FeedbackPosScreen;
