import { StyleSheet } from 'react-native';

export const makeInsigniasScreenStyles = () =>
  StyleSheet.create({
    sectionContainer: {
      backgroundColor: 'white',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: 24,
      padding: 16,
      borderRadius: 20
    },
    titleSection: {
      width: '100%',
      marginBottom: 10
    },
    insignia: {
      alignItems: 'center',
    },
    item: {
      marginHorizontal: '5%',
      width: '40%', // Adjust the width based on your design
      height: 100, // Adjust the height based on your design
      marginBottom: 20,
      alignItems: 'center',
    },
  });