import React from 'react';
import {View, ViewStyle} from 'react-native';
import {makeCardStyles} from './Card.style';
import {Text} from 'react-native-magnus';

const Card = ({
  color,
  text,
  icon,
  style: styleCustom,
}: {
  color: string;
  text: string;
  icon?: React.ReactElement;
  style?: ViewStyle;
}) => {
  const style = makeCardStyles();

  return (
    <View
      style={{...styleCustom, ...style.cardContainer, backgroundColor: color}}>
      {icon}
      <Text textAlign="center" fontWeight="400" fontSize={14}>
        {text}
      </Text>
    </View>
  );
};

export default Card;
