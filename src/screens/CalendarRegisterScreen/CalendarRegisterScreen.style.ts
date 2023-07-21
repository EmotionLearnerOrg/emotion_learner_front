import { StyleSheet } from 'react-native';

export const makeCalendarScreenStyles = () =>
  StyleSheet.create({
    containerView: { flex: 1 },
    container: {
      flex: 1,
    },
    item: {
      flex: 1,
      borderRadius: 5,
      padding: 5,
      marginRight: 5,
      marginTop: 25,
      marginEnd: 25
    },
  });
