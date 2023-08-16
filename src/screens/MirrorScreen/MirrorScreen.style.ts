import {StyleSheet} from 'react-native';

export const makeMirrorScreenStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1, padding: 10},
    buttonsContainer: {
      margin: 10,
      marginVertical: 20,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
    },
    list: {
      alignSelf: 'center',
      marginTop: 16,
    },
  });
