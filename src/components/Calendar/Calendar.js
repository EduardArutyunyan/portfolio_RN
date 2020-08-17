import React, { useState, useRef, useEffect } from 'react';
import {
    Button,
    FlatList,
    View,
} from 'react-native';
import { Month } from './Month';

import { styles } from './styles';


export const Calendar = ({}) => {
    const [dates, setDates] = useState([new Date()])
    const [loadPrev, setLoadPrev] = useState(false);
    const [loadNext, setLoadNext] = useState(false);

    const flatListRef = useRef(null);

    useEffect(() => {
        getPrevMonth();
        getNextMonth();
    }, [])

    useEffect(() => {
        if(loadPrev) {
            getPrevMonth();
            setLoadPrev(false);
        } else if(loadNext) {
            getNextMonth();
            setLoadNext(false);
        }
        
    }, [loadPrev, loadNext])

    const getPrevMonth = () => {
        setDates([new Date(dates[0].getFullYear(), dates[0].getMonth(), 0), ...dates]);
    }

    const getNextMonth = () => {
        setDates([...dates, new Date(
                dates[(dates.length - 1)]
                    .getFullYear(), dates[(dates.length - 1)]
                    .getMonth() + 2, 0
            )]
        );
    }
    console.log(dates)

    return (
        <View style={styles.container}>
            <Button title={'+'} onPress={() => setLoadPrev(true)}/>
            <FlatList 
                ref={flatListRef}
                keyExtractor={item => item.toJSON()}
                data={dates}
                renderItem={({item}) => {
                    return <Month 
                                date={item}
                                lang={'ru'}
                            />
                }}
            />
            <Button title={'+'} onPress={() => setLoadNext(true)}/>
        </View>
    )
}