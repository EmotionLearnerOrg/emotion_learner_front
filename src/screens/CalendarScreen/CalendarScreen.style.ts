import { StyleSheet } from 'react-native';

export const makeCalendarScreenStyles = () =>
  StyleSheet.create({
    containerView: { flex: 1 },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    item: {
      flex: 1,
      borderRadius: 5,
      padding: 5,
      marginRight: 5,
      marginTop: 25,
      marginEnd: 25
    },
    itemText: {
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: 'bold',
      color: 'black',
    },
    cardContent: {
      padding: 10,
      borderRadius: 8,
      margin: 10
    },
    agendaContainer: {
      flex: 1,
      marginBottom: 10, // Espacio entre la agenda y el botón
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 120,
      fontSize: 9,
      alignSelf: 'center',
      bg: '#ee3964',
      mb: 4,
      rounded: 8,
    },
  });