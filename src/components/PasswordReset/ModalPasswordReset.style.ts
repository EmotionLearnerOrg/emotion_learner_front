import { StyleSheet } from 'react-native';

export const makeModalPasswordResetStyles = () =>
    StyleSheet.create({
        containerView: { flex: 1 },
        modal: {
            margin: 0,
        },
        modalContent: {
            backgroundColor: 'white',
            borderRadius: 16,
            padding: 20,
            justifyContent: 'center',
            maxHeight: '100%',
            width: '100%',
        },
        modalTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 20,
            marginStart: 10,
            marginBottom: 10,
            color: 'black',
        },
        modalMessage: {
            marginBottom: 20,
            fontSize: 16,
            marginStart: 10,
            color: 'gray',
        },
        buttonText: {
            color: '#524B6B',
            fontSize: 16,
            fontWeight: 'bold',
        },
        button: {
            width: '100%',
        },
    });
