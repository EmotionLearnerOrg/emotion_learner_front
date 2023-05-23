import { StyleSheet } from 'react-native';

export const makeCalendarCardContainerStyles = () => StyleSheet.create({
    calendarCardContainer: {
        marginBottom: 10,
        padding: 10,
    },
    gamesGrid: {
        flexDirection: 'row',
        gap: 10,
        height: 170,
    },
    cardContainer: {
        height: 210,
        marginTop: 30,
        rowGap: 4,
        alignSelf: 'center',
        backgroundColor: 'red',
        borderRadius: 20
    },
    emotionsContainer: {
        rowGap: 4,
        alignSelf: 'center',
        marginBottom: 16,
    },
});
