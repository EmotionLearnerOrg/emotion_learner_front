import React from 'react';
import {SvgXml} from 'react-native-svg';

interface SvgComponentProps {
  width: number;
  height: number;
  color?: string;
}

const InsigniaRuletaSvg: React.FC<SvgComponentProps> = ({
  width,
  height,
  color = 'gray',
}) => {
  const svgData = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"
  preserveAspectRatio="xMidYMid meet">
 <metadata>
 Created by potrace 1.15, written by Peter Selinger 2001-2017
 </metadata>
 <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
 fill="${color}" stroke="none">
 <path d="M3684 12777 c29 -118 741 -2470 911 -3012 166 -528 325 -978 394
 -1113 l20 -40 -67 -40 c-123 -73 -168 -161 -204 -396 -24 -165 -41 -222 -80
 -281 -42 -63 -104 -107 -293 -210 -169 -92 -325 -187 -440 -269 -1271 -908
 -1841 -2501 -1435 -4007 272 -1004 956 -1857 1880 -2342 390 -205 806 -336
 1275 -403 177 -25 633 -30 835 -9 858 87 1630 446 2239 1039 633 618 1012
 1405 1107 2299 20 189 14 660 -10 832 -77 540 -243 1020 -502 1450 -372 616
 -861 1073 -1526 1425 -292 155 -332 205 -372 465 -38 243 -81 340 -178 401
 -30 19 -38 30 -33 42 60 142 169 496 279 910 146 545 826 3241 826 3272 0 7
 -290 10 -902 10 l-903 0 -82 -328 c-236 -938 -333 -1319 -340 -1334 -7 -14
 -252 794 -489 1610 l-16 52 -950 0 -950 0 6 -23z m1474 -4452 l32 -45 638 0
 c351 0 768 3 926 7 287 6 288 6 310 30 22 23 22 24 40 4 40 -44 24 -176 -28
 -239 -45 -53 -147 -65 -307 -37 -471 81 -904 80 -1383 -6 -191 -34 -270 -23
 -318 42 -49 65 -63 165 -32 217 14 24 70 72 84 72 4 0 20 -20 38 -45z"/>
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

const InsigniaRuleta = React.memo(InsigniaRuletaSvg);

export default InsigniaRuleta;
