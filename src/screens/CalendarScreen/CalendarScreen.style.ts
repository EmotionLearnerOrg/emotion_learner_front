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
      backgroundColor: 'white',
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