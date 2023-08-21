import React, { FC } from 'react';
import { ArcadeView } from '../../components/ArcadeView';
import { ArcadeType, HomeRoutes } from '../../stacks/HomeParams';

const ArcadeScreen: FC<ArcadeType> = ({ navigation }) => {

  const goToRuletaArcadeMode = () => {
    navigation.navigate(HomeRoutes.RULETA, {
      type: 'Arcade',
    });
  };

  return (
    <ArcadeView
      goToRuleta={goToRuletaArcadeMode}
    />
  );
};

export default ArcadeScreen;
