import { StyleSheet } from 'react-native';

export const makeSelectorGameStyles = () => StyleSheet.create({
    selectorGameContainer: {
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
    },
    gamesGrid: {
        flexDirection: 'row',
        gap: 10,
        height: 170,
    },
});
