import {StyleSheet} from 'react-native';

export const makeSelectorGameSectionStyles = () =>
  StyleSheet.create({
    selectorGameContainer: {
      height: 220,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    titleContainer: {
      alignSelf: 'flex-start',
      marginBottom: 10,
    },
    gamesGrid: {
      flexDirection: 'row',
      gap: 10,
      height: 170,
    },
    leftSection: {
      flex: 0.5,
    },
    contFull: {
      flex: 1,
    },
    contHalf: {
      flex: 0.5,
    },
    rigthSection: {
      flex: 0.5,
      gap: 10,
    },
  });
