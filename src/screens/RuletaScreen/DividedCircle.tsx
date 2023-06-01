import React from 'react';
import {Svg, Circle, Path, G, Text} from 'react-native-svg';
const sentimientos = [
  {color: '#ceecdb', nombre: 'feliz'},
  {color: '#fcd0d2', nombre: 'ira'},
  {color: '#e5e6fe', nombre: 'sorpresa'},
  {color: '#f3f1f4', nombre: 'tristeza'},
];

const DividedCircle = ({
  divisions,
  radius,
}: {
  divisions: number;
  radius: number;
}) => {
  const icons: string[] = [];
  for (let index = 0; index < divisions; index++) {
    icons.push(`ic${index}`);
  }
  const circleRadius = 130;
  const iconSize = 20;
  const iconPadding = 35;

  const degreesPerIcon = 360 / icons.length;

  const angle = (2 * Math.PI) / divisions;
  const paths = [];

  for (let i = 0; i < divisions; i++) {
    const startAngle = angle * i;
    const endAngle = angle * (i + 1);

    const startX = radius * Math.cos(startAngle) + radius;
    const startY = radius * Math.sin(startAngle) + radius;

    const endX = radius * Math.cos(endAngle) + radius;
    const endY = radius * Math.sin(endAngle) + radius;

    const path = `M${radius},${radius} L${startX},${startY} A${radius},${radius} 0 0,1 ${endX},${endY} Z`;
    paths.push(
      <Path
        key={i}
        d={path}
        fill={sentimientos[i].color}
        // fill={`hsl(${i * (360 / divisions)}, 100%, 50%)`} //por si queres generar uno aleatorio..
      />,
    );
  }

  return (
    <Svg
      rotation={-(360 / (divisions * 2))}
      width={radius * 2}
      height={radius * 2}>
      <Circle cx={radius} cy={radius} r={radius} fill="transparent" />
      {paths}
      <G
        rotation={360 / (divisions * 2)}
        originX={circleRadius}
        originY={circleRadius}>
        {sentimientos.map((sent, index) => {
          const angle2 = index * degreesPerIcon;
          const radians = (angle2 * Math.PI) / 180;
          const x =
            circleRadius +
            (circleRadius - iconSize - iconPadding) * Math.cos(radians);
          const y =
            circleRadius +
            (circleRadius - iconSize - iconPadding) * Math.sin(radians);

          return (
            <>
              <Text
                key={index}
                x={x}
                y={y}
                fill="black"
                fontSize={iconSize}
                textAnchor="middle">
                {sent.nombre}
              </Text>
            </>
          );
        })}
      </G>
    </Svg>
  );
};

export default DividedCircle;
