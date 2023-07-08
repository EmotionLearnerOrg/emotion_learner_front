import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SvgComponentProps {
  width: number;
  height: number;
  color?: string;
}

const InsigniaBloqueadaSvg: React.FC<SvgComponentProps> = ({
  width,
  height,
  color = 'black',
}) => {
  const svgData = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1071.000000pt" height="1280.000000pt"
  viewBox="0 0 1071.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
  <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
  </metadata>
  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="${color}" stroke="none">
<path d="M1066 11393 c-84 -632 -111 -1080 -103 -1749 5 -467 16 -672 53
-1014 184 -1719 754 -3301 1709 -4745 598 -905 1332 -1728 2138 -2399 151
-125 457 -356 473 -356 6 0 56 32 110 71 546 394 1242 1061 1765 1689 876
1054 1544 2244 1965 3505 397 1192 580 2462 536 3738 -17 490 -58 967 -113
1320 l-11 67 -4252 0 -4253 0 -17 -127z" />
  </g>
</svg>`;

  return <SvgXml xml={svgData} width={width} height={height} />;
};

const InsigniaBloqueada = React.memo(InsigniaBloqueadaSvg);

export default InsigniaBloqueada;
