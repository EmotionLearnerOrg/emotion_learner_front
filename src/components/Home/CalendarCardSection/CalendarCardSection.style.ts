import { StyleSheet } from 'react-native';

export const makeCalendarCardContainerStyles = () => StyleSheet.create({
    calendarCardContainer: {
        height: 300,
        margin: 10,
        marginBottom: 10,
        padding: 20,
        elevation: 3,
        borderRadius: 8
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
        borderRadius: 20
    },
    emotionsContainer: {
        rowGap: 4,
        alignSelf: 'center',
        marginBottom: 16,
    },
    shadowContainer: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
});
