import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SvgComponentProps {
  width: number;
  height: number;
  color?: string;
}

const InsigniaSvg: React.FC<SvgComponentProps> = ({
  width,
  height,
  color = 'gray',
}) => {
  const svgData = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1071.000000pt" height="1280.000000pt"
  viewBox="0 0 1071.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
  <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
  </metadata>
  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="${color}" stroke="none">
      <path d="M505 12337 c-79 -31 -137 -87 -165 -162 -13 -33 -109 -735 -140
-1020 -92 -844 -99 -1740 -19 -2535 223 -2235 1074 -4304 2504 -6090 579 -722
1291 -1424 1960 -1930 138 -105 215 -174 405 -364 l235 -236 204 0 c182 0 205
2 218 18 7 9 74 137 148 283 l134 267 108 83 c571 439 1222 1072 1732 1684
904 1083 1578 2251 2046 3540 590 1627 797 3414 604 5230 -26 246 -127 1009
-140 1057 -14 52 -66 117 -124 153 l-48 30 -4816 2 c-3670 1 -4823 -1 -4846
-10z m9328 -569 c12 -68 77 -569 91 -708 84 -791 87 -1677 11 -2425 -178
-1740 -764 -3387 -1733 -4865 -679 -1036 -1574 -2011 -2489 -2712 -79 -60
-154 -124 -167 -141 -13 -18 -47 -79 -76 -137 -29 -58 -54 -107 -56 -110 -3
-2 -62 52 -132 122 -70 69 -167 154 -217 189 -240 170 -628 500 -931 790 -934
895 -1708 1938 -2289 3084 -957 1890 -1328 3993 -1094 6205 21 197 87 707 94
728 3 9 911 12 4494 12 l4489 0 5 -32z" />
      <path d="M1066 11393 c-84 -632 -111 -1080 -103 -1749 5 -467 16 -672 53
-1014 184 -1719 754 -3301 1709 -4745 598 -905 1332 -1728 2138 -2399 151
-125 457 -356 473 -356 6 0 56 32 110 71 546 394 1242 1061 1765 1689 876
1054 1544 2244 1965 3505 397 1192 580 2462 536 3738 -17 490 -58 967 -113
1320 l-11 67 -4252 0 -4253 0 -17 -127z" />
  </g>
</svg>`;

  return (
    <SvgXml
      xml={svgData}
      width={width}
      height={height}
      fill={'blue'}
      color={'blue'}
    />
  );
};

const Insignia = React.memo(InsigniaSvg);

export default Insignia;
