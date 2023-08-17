import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {makeOptionItemStyles} from './OptionItem.style';

const OptionItem = ({source, onPress}: {onPress: () => void; source: any}) => {
  const style = makeOptionItemStyles();

  return (
    <TouchableOpacity
      style={style.container}
      activeOpacity={0.5}
      onPress={onPress}>
      <Image source={source} style={style.OptionImageStyle} />
    </TouchableOpacity>
  );
};

export default OptionItem;
