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
    const [loading, setLoading] = useState(false);

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

    const getPrevMonth = async () => {
        setDates([new Date(dates[0].getFullYear(), dates[0].getMonth(), 0), ...dates]);
    }

    const getNextMonth = async () => {
        setDates([...dates, new Date(
                dates[(dates.length - 1)]
                    .getFullYear(), dates[(dates.length - 1)]
                    .getMonth() + 2, 0
            )]
        );
    }
    
    const handleScroll = async ({contentOffset, contentSize, layoutMeasurement}) => {
        //console.log('contentOffset:',contentOffset, 'contentSize:',contentSize, 'layoutMeasurement:', layoutMeasurement);

        if(contentOffset.y < 100) {
            setLoading(true);
            await getPrevMonth();
        } else if ((contentSize.height - layoutMeasurement.height - 200) < contentOffset.y) {
            setLoading(true);
            await getNextMonth();
        }
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <FlatList 
                ref={flatListRef}
                refreshing={loading}
                onRefresh={() => null}
                
                onScroll={({nativeEvent}) => handleScroll(nativeEvent)}
                keyExtractor={item => item.toJSON()}
                data={dates}
                renderItem={({item}) => {
                    return (
                        <Month 
                            date={item}
                            lang={'en'}
                        />
                    )
                }}
            />
        </View>
    )
}