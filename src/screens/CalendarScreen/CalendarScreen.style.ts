import { StyleSheet } from 'react-native';

export const makeCalendarScreenStyles = () =>
  StyleSheet.create({
    containerView: { flex: 1 },
    container: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      mb: 4,
      rounded: 8,
      width: 120,
      fontSize: 20,
      alignSelf: 'center',
    },
  });