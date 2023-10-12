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
      alignItems: 'center',
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
      resizeMode: 'contain',
      flex: 0.7,
    },
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 20,
    },
    subtitle: {
      fontSize: 22,
      marginBottom: 10,
    },
    arrow: {
      fontSize: 35,
      fontWeight: 'bold',
    },
    italic: {
      fontSize: 19,
      fontStyle: 'italic',
    },
  });
