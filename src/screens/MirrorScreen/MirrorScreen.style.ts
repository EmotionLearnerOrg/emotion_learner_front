import {StyleSheet} from 'react-native';

export const makeMirrorScreenStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1, padding: 10},
    calendarCardContainer: {
      margin: 10,
      marginVertical: 20,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
    },
    cardContainer: {
      marginTop: 20,
      rowGap: 16,
      alignSelf: 'center',
      borderRadius: 20,
      padding: 10,
    },
    shadowContainer: {
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
    buttonEmotion: {
      width: 120,
    },
    buttonCalendar: {
      width: '100%',
    },
  });
