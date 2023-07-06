import {StyleSheet} from 'react-native';

export const makeRuletaStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 64,
      alignItems: 'center',
    },
    knop: {
      top: -20,
      position: 'absolute',
    },
    wheel: {
      width: 260,
      height: 260,
      borderRadius: 130,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
    },
    button: {
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'blue',
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    dialogTitle: {
      alignSelf: 'center',
    },
  });
