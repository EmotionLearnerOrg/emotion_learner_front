import {StyleSheet} from 'react-native';

export const makeLoadingScreenStyle = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F9F7F6',
    },
    title: {
      fontSize: 44,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#FCA34D',
      textDecorationLine: 'underline',
    },
  });
