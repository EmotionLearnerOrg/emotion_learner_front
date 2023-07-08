import {StyleSheet} from 'react-native';

export const makeInsigniasScreenStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1},
    list: {
      alignSelf: 'center',
      marginTop: 16,
    },
    gapList: {
      gap: 16,
    },
    insigniaItem: {flexDirection: 'column', alignItems: 'center'},
  });
