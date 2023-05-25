import {StyleSheet} from 'react-native';

export const makeStyles = () =>
  StyleSheet.create({
    containerButton: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36,
      marginHorizontal: 10,
    },
    allowButton: {
      padding: 10,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 4,
      justifyContent: 'center',
    },
    button: {
      width: '100%',
    },
  });
