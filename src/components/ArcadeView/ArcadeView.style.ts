import {StyleSheet} from 'react-native';
export const makeFeedbackViewStyles = () =>
  StyleSheet.create({
    containerView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center',
    },
    tarjetablanca: {
      padding: 10,
      margin: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
    },
    buttonContainer: {
      margin: 10,
      marginVertical: 20,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
      // alignSelf: 'center',
    },
    cardContainer: {
      marginTop: 20,
      rowGap: 16,
      borderRadius: 20,
      padding: 10,
    },
    buttonEmotion: {
      width: 120,
    },
    image: {
      // alignSelf: 'center',
      flex: 1,
    },
  });
