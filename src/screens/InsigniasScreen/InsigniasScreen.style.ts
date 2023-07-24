import {StyleSheet} from 'react-native';

export const makeInsigniasScreenStyles = () =>
  StyleSheet.create({
    sectionContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 24,
    },
    titleSection: {
      width: '100%',
    },
    insignia: {
      alignItems: 'center',
    },
    item: {
      marginHorizontal: '5%',
      width: '40%', // Adjust the width based on your design
      height: 100, // Adjust the height based on your design
      marginBottom: 10,
      padding: 10,
      alignItems: 'center',
    },
  });
