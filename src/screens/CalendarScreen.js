import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from '../components/Calendar';


export const CalendarScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Calendar</Text>
            <Calendar />
        </View>
    )
}

CalendarScreen.navigationOptions = {
    headerTitle: 'Компонент календарь'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})
