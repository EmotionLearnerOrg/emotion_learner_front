import {StyleSheet} from 'react-native';

export const makeMirrorScreenStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1, padding: 10},
    buttonsContainer: {
      marginVertical: 20,
      padding: 10,
      elevation: 5,
      borderRadius: 16,
      backgroundColor: 'white',
    },
    list: {
      alignSelf: 'center',
      marginTop: 16,
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
