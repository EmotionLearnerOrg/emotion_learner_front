import React from 'react';
import {Svg, Circle} from 'react-native-svg';
import {RuletaEmociones} from '../../../../assets';

const Ruleta = ({radius}: {radius: number}) => {
  return (
    <Svg rotation={(72 / 2) * 3} width={radius * 2} height={radius * 2}>
      <Circle cx={radius} cy={radius} r={radius} fill="transparent" />
      <RuletaEmociones width={260} height={260} />
    </Svg>
  );
};

export default Ruleta;
