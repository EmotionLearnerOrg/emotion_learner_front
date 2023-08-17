import {StyleSheet} from 'react-native';

export const makeRealFeelScreenStyles = () =>
  StyleSheet.create({
    containerView: {flex: 1, padding: 10},
    image: {
      alignSelf: 'center',
      flex: 1,
      resizeMode: 'contain',
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    floatingButtonContainer: {
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
  });
