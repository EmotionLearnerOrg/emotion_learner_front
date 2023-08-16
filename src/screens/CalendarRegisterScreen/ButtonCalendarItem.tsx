import React from 'react';
import {Button} from 'react-native-magnus';
import {HorarioType} from '../../types';
import {makeButtonCalendarItemStyles} from './ButtonCalendarItem.style';

const ButtonCalendarItem = ({
  item,
  bg,
  color,
  action,
}: {
  item: HorarioType;
  bg: string;
  color: string;
  action: () => void;
}) => {
  const style = makeButtonCalendarItemStyles();

  return (
    <Button
      mb={4}
      rounded={8}
      style={style.button}
      bg={bg}
      color={color}
      onPress={action}>
      {item.name}
    </Button>
  );
};

export default ButtonCalendarItem;
