import { StyleSheet } from 'react-native';

export const makeCalendarCardContainerStyles = () =>
  StyleSheet.create({
    calendarCardContainer: {
      height: 285,
      margin: 10,
      marginBottom: 10,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
    },
    labelContainer: {
      position: 'absolute',
      right: 24,
      top: 20,
      transform: [{ rotate: '270deg' }],
    },
    cardContainer: {
      height: 210,
      marginTop: 20,
      rowGap: 4,
      alignSelf: 'center',
      borderRadius: 20,
    },
    emotionsContainer: {
      rowGap: 4,
      alignSelf: 'center',
      marginBottom: 16,
    },
    shadowContainer: {
      shadowColor: '#171717',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
    },
    buttonEmotion: {
      width: 100,
    },
    buttonCalendar: {
      width: '100%',
    },
  });