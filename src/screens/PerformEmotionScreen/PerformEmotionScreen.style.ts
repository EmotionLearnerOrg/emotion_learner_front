import {StyleSheet} from 'react-native';

export const makePerformEmotionScreenStyles = () =>
  StyleSheet.create({
    containerView: {
      flex: 1,
      alignItems: 'center',
    },
    containerButton: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36,
      marginHorizontal: 10,
    },
    button: {
      width: '100%',
    },
  });
