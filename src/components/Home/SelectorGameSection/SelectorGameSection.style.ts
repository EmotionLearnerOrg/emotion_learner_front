import {StyleSheet} from 'react-native';

export const makeSelectorGameStyles = () =>
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
  });
