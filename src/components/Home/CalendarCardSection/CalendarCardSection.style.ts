import { StyleSheet } from 'react-native';

export const makeCalendarCardContainerStyles = () =>
  StyleSheet.create({
    calendarCardContainer: {
      margin: 10,
      marginVertical: 20,
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
      gap: 10,
      flexDirection: 'row',
      height: 120,
      marginTop: 25,
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
