import { StyleSheet } from 'react-native';

export const makeProfileScreenStyles = () =>
  StyleSheet.create({
    containerView: { flex: 1 },
    dialogTitle: {
      alignSelf: 'center',
    },
    cardProfile: {
      backgroundColor: '#7551FF',
      borderRadius: 20,
      marginBottom: 20
    },
    cardProfileHeader: {
      flex: 1,
      top: 10,
      flexDirection: 'row',
      justifyContent: 'space-between', // Distribuye los elementos con espacio entre ellos
      alignItems: 'center', // Centra los elementos verticalmente en el contenedor
      marginEnd: 20
    },
    nickname: {
      fontSize: 22,
      color: 'white',
      marginStart: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
      color: 'white',
      marginStart: 20,
      marginTop: 20,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 12,
      color: 'white',
      marginStart: 20,
      marginTop: 5,
      marginBottom: 5
    },
    cardEditProfile:{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      marginTop: 10,
      padding: 16,
      borderRadius: 20,
      marginBottom: 20,
      marginStart: 17,
      marginEnd: 17
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 5,
      paddingHorizontal: 10,
      color: 'white',
    }
  });
