import React, { useState } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Month } from './Month';


export const Calendar = ({}) => {

    return (
        <View>
            <Month 
                date={new Date('2020-02-01')}
                lang={'ru'}
            />
        </View>
    )
}