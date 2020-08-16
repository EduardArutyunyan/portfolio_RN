import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { lastDayCalc, weekdayCalc, locales } from './_calendarManager';


export const Month = ({date, events, ...props}) => {
    const lastDayOfMonth = lastDayCalc(date);
    const month = Array.from(Array(lastDayOfMonth).keys(), (n, i) => i + 1);
    const startWeekDay = weekdayCalc(date);

    const renderBody = () => {
        let emptiesFilled = startWeekDay > 0 
            ? [Array(startWeekDay - 1).fill(''), ...month] : month;
        
        let weeks = Array(Math.ceil(month.length / 7)).fill([]);
        
        emptiesFilled = emptiesFilled.map((item, index) => {
            if(typeof item !== 'number') {
                return (
                    <View 
                        style={{
                            ...styles.dayItem,
                            ...styles.dayItemDisable
                        }} 
                        key={(index*100).toString() + item.toString()}
                    />
                )
            } else return (
                <TouchableOpacity style={styles.dayItem} key={index.toString()}>
                    <Text style={styles.dayItemText}>{item}</Text>
                </TouchableOpacity>
            )
        });        

        return weeks.map((week, index) => {
            week = emptiesFilled.slice(index * 7, (index + 1) * 7);
            
            return (
                <View 
                    style={{
                        ...styles.weekRow,
                        ...(week.length < 7 ? {justifyContent: 'flex-start'} : null)
                    }} 
                    key={index.toString()}>{week}</View>
            )
        });
    }

    const renderHeader = () => {
        
        return (
            <View style={{...styles.weekRow, ...styles.monthWeekHeaderRow, ...props.monthWeekHeaderRowStyle}}>
                {locales[props.lang].weekDaysNamesShort.map(item => {
                        return <Text 
                            style={styles.monthWeekHeaderText}
                            key={item.toString()}>
                            {item}
                        </Text>}
                    )}
            </View>
        )
    }
    

    return (
        <View>
            {renderHeader()}
            {renderBody()}
        </View>
    )
}





const device = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

const dayItemSize = device.width *.8 / 7;

const styles = StyleSheet.create({
    weekRow: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingHorizontal: 15
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