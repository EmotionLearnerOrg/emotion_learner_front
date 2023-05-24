import {StyleSheet} from 'react-native';

export const makeCalendarCardContainerStyles = () =>
  StyleSheet.create({
    headerContainer: {
      marginBottom: 10,
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    rightSide: {
      flexDirection: 'row',
      marginLeft: 'auto',
    },
  });
