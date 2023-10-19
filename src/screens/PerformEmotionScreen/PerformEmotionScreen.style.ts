import {StyleSheet} from 'react-native';

export const makePerformEmotionScreenStyles = () =>
  StyleSheet.create({
    containerView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
    text: {
      fontSize: 32,
      color: '#FF00FF',
    },
    processingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(192, 192, 192, 0.85)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
