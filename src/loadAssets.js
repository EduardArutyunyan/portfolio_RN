import * as Font from 'expo-font';

export async function loadAssets() {
    return await Font.loadAsync({
        'open-bold': require('../assets/fonts/open_sans/OpenSans-Bold.ttf'),
        'open-regular': require('../assets/fonts/open_sans/OpenSans-Regular.ttf'),
    })
}