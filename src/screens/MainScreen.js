import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, } from 'react-native';

import { device, colors } from '../default_theme';



export const MainScreen = ({navigation}) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.linksListWrap}>
                <Text style={styles.linksListTitle}>Мои компоненты</Text>
                <Text 
                    style={styles.textLink}
                    onPress={() => navigation.navigate('Calendar')}>
                        Календарь
                </Text>
            </View>
        </SafeAreaView>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Главная',
    headerStyle: {
        backgroundColor: colors.danger,
    },
    headerTintColor: colors.white,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    linksListWrap: {
        width: device.width,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        minHeight: 200

    },
    linksListTitle: {
        alignSelf: 'center',
        marginVertical: 15,
        fontSize: 20,
        fontFamily: 'open-bold',
    },
    textLink: {
        color: colors.main,
        fontSize: 20,
        fontFamily: 'open-regular',
        marginVertical: 10,
    }
})
