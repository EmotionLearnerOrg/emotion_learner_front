import {StyleSheet} from 'react-native';

export const makeOptionItemStyles = () =>
  StyleSheet.create({
    OptionImageStyle: {
      height: 120,
      width: 100,
      resizeMode: 'stretch',
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
  });
