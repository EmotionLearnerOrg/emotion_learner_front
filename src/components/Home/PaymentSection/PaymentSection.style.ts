import {StyleSheet} from 'react-native';

export const makePaymentSectionStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1},
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
    },
    buttonText: {
      color: '#524B6B',
      fontSize: 16,
      fontWeight: 'bold',
    },
    button: {
      width: '100%',
    },
  });
