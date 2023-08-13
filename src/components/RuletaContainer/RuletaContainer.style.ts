import {StyleSheet} from 'react-native';

export const makeRuletaContainerStyle = () =>
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
    button: {
      marginTop: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#FCCDCE',
      borderRadius: 16,
    },
    buttonText: {
      color: '#524B6B',
      fontSize: 16,
      fontWeight: 'bold',
    },
    dialogTitle: {
      color: "#150B3D",
      alignSelf: 'center',
    },
  });
