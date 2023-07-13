import {StyleSheet} from 'react-native';

export const makeHeaderSectionStyles = () =>
  StyleSheet.create({
    headerContainer: {
      marginBottom: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    configContainer: {
      flexDirection: 'row',
      marginLeft: 'auto',
    },
  });
