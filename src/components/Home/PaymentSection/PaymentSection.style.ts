import { StyleSheet } from 'react-native';

export const makePaymentSectionStyles = () =>
  StyleSheet.create({
    containerView: { flex: 1 },
    cardPayment: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 16,
      marginBottom: 20,
      marginStart: 17,
      marginEnd: 17,
    },
    line: {
      borderBottomColor: '#DEE1E7',
      borderBottomWidth: 1,
      marginTop: 10,
      marginBottom: 10,
    },
    buttonText: {
      color: '#524B6B',
      fontSize: 16,
      fontWeight: 'bold',
    },
    button: {
      width: '100%',
    },
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
      maxHeight: '50%', // Establece la altura máxima al 50% de la pantalla
      width: '100%', // Ocupa todo el ancho de la pantalla
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
