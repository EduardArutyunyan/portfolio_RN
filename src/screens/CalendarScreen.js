import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from '../components/Calendar';


export const CalendarScreen = (props) => {

    return (
        <View style={styles.container}>
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
