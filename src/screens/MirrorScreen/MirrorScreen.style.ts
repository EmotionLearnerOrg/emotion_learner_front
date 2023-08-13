import {StyleSheet} from 'react-native';

export const makeMirrorScreenStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1, padding: 10},
    buttonsContainer: {
      margin: 10,
      marginVertical: 20,
      padding: 10,
      elevation: 5,
      borderRadius: 16,
      backgroundColor: 'white',
    },
    // cardContainer: {
    //   marginTop: 20,
    //   rowGap: 16,
    //   alignSelf: 'center',
    //   borderRadius: 20,
    //   padding: 10,
    // },
    // buttonEmotion: {
    //   width: 120,
    // },
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
