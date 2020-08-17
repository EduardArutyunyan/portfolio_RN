import { Dimensions, StyleSheet } from 'react-native';

export const device = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

const dayItemSize = device.width *.75 / 7;


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: device.width
    },
    monthTitle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    monthTitleText: {
        fontSize: 24,
        fontFamily: 'open-bold',
    },
    weekRow: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 10
    },
    dayItem: {
        width: dayItemSize,
        height: dayItemSize,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0fff0',
        marginHorizontal: 5,
        borderRadius: 5
    },
    weekEndDayItem: {
        backgroundColor: '#ada'
    },
    weekEndDayItemText: {

    },
    dayItemDisable: {
        width: dayItemSize,
        height: dayItemSize,
        backgroundColor: '#cccccc70'
    },
    dayItemText: {
        fontSize: 16,
        fontWeight: '700',
    },
    monthWeekHeaderRow: {
        marginBottom: 10,
    },
    monthWeekHeaderText: {
        width: dayItemSize,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
})