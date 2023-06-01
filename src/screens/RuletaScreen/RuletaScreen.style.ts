import {StyleSheet} from 'react-native';

export const makeRuletaScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    roulette: {
      width: 200,
      height: 200,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 130,
      overflow: 'hidden',
    },
    segment: {
      position: 'absolute',
      top: 0,
      left: 130,
      width: 2,
      height: 130,
      backgroundColor: 'red',
      transformOrigin: 'top',
    },
    spinButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'green',
    },
  });
