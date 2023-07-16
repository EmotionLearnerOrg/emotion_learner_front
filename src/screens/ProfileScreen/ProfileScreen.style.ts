import { StyleSheet } from 'react-native';

export const makeProfileScreenStyles = () =>
  StyleSheet.create({
    containerView: { flex: 1 },
    dialogTitle: {
      alignSelf: 'center',
    },
    cardProfile: {
      backgroundColor: '#A951FF',
      height: 220,
      borderRadius: 20,
      padding: 16,
      marginBottom: 20,
      elevation: 4, // sombra en Android
      shadowColor: '#000', // sombra en iOS
      shadowOffset: { width: 0, height: 2 }, // sombra en iOS
      shadowOpacity: 0.1, // sombra en iOS
      shadowRadius: 4 // sombra en iOS
    },
    cardPayment: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 16,
      marginBottom: 20,
      marginStart: 17,
      marginEnd: 17,
      elevation: 4, // sombra en Android
      shadowColor: '#000', // sombra en iOS
      shadowOffset: { width: 0, height: 2 }, // sombra en iOS
      shadowOpacity: 0.1, // sombra en iOS
      shadowRadius: 4 // sombra en iOS
    },
    nickname: {
      fontSize: 14,
      color: 'white',
      start: 28,
      marginTop: 70
    },
    line: {
      borderBottomColor: '#DEE1E7',
      borderBottomWidth: 1,
    }
  });
