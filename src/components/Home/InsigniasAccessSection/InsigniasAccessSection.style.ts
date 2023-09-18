import { StyleSheet } from 'react-native';

export const makeInsigniasAccessSectionStyles = () =>
  StyleSheet.create({
    insigniasContainer: {
      margin: 10,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
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