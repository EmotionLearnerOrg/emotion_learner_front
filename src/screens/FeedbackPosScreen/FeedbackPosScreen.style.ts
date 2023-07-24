import {StyleSheet} from 'react-native';
export const makeFeedbackPosScreenStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1, padding: 10},
    calendarCardContainer: {
      margin: 10,
      marginVertical: 20,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
      alignSelf: 'center',
    },
    cardContainer: {
      marginTop: 20,
      rowGap: 16,
      alignSelf: 'center',
      borderRadius: 20,
      padding: 10,
    },
    buttonEmotion: {
      width: 120,
    },
    image: {
      alignSelf: 'center',
      flex: 1,
    },
  });
