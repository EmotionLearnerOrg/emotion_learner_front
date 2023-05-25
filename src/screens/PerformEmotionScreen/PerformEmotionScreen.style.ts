import {StyleSheet} from 'react-native';

export const makeRuletaScreenStyles = () =>
  StyleSheet.create({
    containerView: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      marginTop: 50,
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36,
    },
    button: {
      position: 'absolute',
      bottom: 0,
    },
  });
