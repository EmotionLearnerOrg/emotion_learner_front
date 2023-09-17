import { StyleSheet } from 'react-native';

export const makeSelectorGameSectionStyles = () =>
  StyleSheet.create({
    selectorGameContainer: {
      margin: 10,
      padding: 10,
      elevation: 5,
      borderRadius: 8,
      backgroundColor: 'white',
    },
    titleContainer: {
      alignSelf: 'center',
      marginBottom: 10,
    },
    gamesGrid: {
      flexDirection: 'row',
      gap: 10,
      height: 264,
      marginTop: 15
    },
    leftSection: {
      flex: 0.5,
    },
    contFull: {
      flex: 1,
    },
    contHalf: {
      flex: 0.33,
    },
    rigthSection: {
      flex: 0.5,
      gap: 10,
    },
  });
