import { StyleSheet } from 'react-native';

export const makeModalPaymentStyles = () =>
  StyleSheet.create({
    containerView: { flex: 1 },
    modal: {
      justifyContent: 'center',
      margin: 0,
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 16,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: '50%',
      width: '100%',
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: 'black',
    },
    modalMessage: {
      marginBottom: 20,
      fontSize: 16,
      textAlign: 'center',
      color: 'gray',
    },
  });
