import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { colors } from './default_theme';
import { Platform } from 'react-native';

import { MainScreen } from './screens/MainScreen';
import { CalendarScreen } from './screens/CalendarScreen';

const PostNavigator = createStackNavigator({
        Main: {screen: MainScreen},
        Calendar: {screen: CalendarScreen},
    }, {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.main,
            },
            headerTintColor: '#ffffff',
        }
    }
);

export const MainRouter = createAppContainer(PostNavigator);