import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button,
} from 'react-native';
import { Month } from './Month';


export const Calendar = ({}) => {
    const [dates, setDates] = useState([new Date()])
    const [loadPrev, setLoadPrev] = useState(true);
    const [loadNext, setLoadNext] = useState(false);

    const scrollViewRef = useRef(null);

    useEffect(() => {
        if(loadPrev) {
            setDates([new Date(dates[0].getFullYear(), dates[0].getMonth(), 0), ...dates]);
            setLoadPrev(false);
            setLoadNext(true)
        }
        
    }, [loadPrev])

    useEffect(() => {
        if(loadNext) {
            setDates([...dates, new Date(dates[(dates.length - 1)].getFullYear(), dates[(dates.length - 1)].getMonth() + 2, 0)]);
            setLoadNext(false)
        }
    }, [loadNext])


    return (
        <ScrollView ref={scrollViewRef}>
            <Button title={'+'} onPress={() => setLoadPrev(true)}/>
            {dates.map((item, key) => {
                return (
                    <Month 
                        key={key + item.toJSON()}
                        date={item}
                        lang={'ru'}
                    />
                )
            })}
            <Button title={'+'} onPress={() => setLoadNext(true)}/>
            
        </ScrollView>
    )
}