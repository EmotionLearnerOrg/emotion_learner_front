import {StyleSheet} from 'react-native';
export const makeFeedbackViewStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1, padding: 10},
    buttonContainer: {
      margin: 10,
      marginVertical: 20,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
      alignSelf: 'center',
    },
    containerImage: {justifyContent: 'center', alignItems: 'center', flex: 1},
    image: {
      alignSelf: 'center',
      flex: 1,
      resizeMode: 'contain',
    },
  });
