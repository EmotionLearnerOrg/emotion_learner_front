import {StyleSheet} from 'react-native';

export const makeInputPasswordStyle = () =>
  StyleSheet.create({
    input: {
      width: '80%',
      height: 40,
      backgroundColor: '#ECF0F1',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      color: '#34495E',
    },
    icon: {
      justifyContent: 'center',
    },
  });
