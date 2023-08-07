import React, { FC } from 'react';
import { ArcadeView } from '../../components/ArcadeView';
import { ArcadeType, HomeRoutes } from '../../stacks/HomeParams';

const ArcadeScreen: FC<ArcadeType> = ({ route, navigation }) => {
  return (
    <ArcadeView
      // emotion={emotion}
      // type={type}
      // success
      goToRuleta={() => { navigation.navigate(HomeRoutes.RULETA); }}
      goToAsociation={() => { navigation.navigate(HomeRoutes.ASOCIATION); }}
    />
  );
};

export default ArcadeScreen;
