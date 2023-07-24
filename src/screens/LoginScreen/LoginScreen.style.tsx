import {StyleSheet} from 'react-native';

export const makeLoginScreenStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F9F7F6',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#2C3E50',
    },
    input: {
      width: '80%',
      height: 40,
      backgroundColor: '#ECF0F1',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      color: '#34495E',
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
