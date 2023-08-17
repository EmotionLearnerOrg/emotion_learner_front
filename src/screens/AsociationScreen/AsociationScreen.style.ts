import {StyleSheet} from 'react-native';

export const makeAsociationScreenStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1, flexDirection: 'column', alignItems: 'center'},
    OptionImageStyle: {
      width: 120,
      resizeMode: 'contain',
      flex: 1,
    },
    containerOptions: {
      flex: 1,
      flexDirection: 'row',
    },
  });
