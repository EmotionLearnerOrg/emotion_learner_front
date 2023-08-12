import {StyleSheet} from 'react-native';

export const makeSelectorGameSectionStyles = () =>
  StyleSheet.create({
    selectorGameContainer: {
      height: 314,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
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
