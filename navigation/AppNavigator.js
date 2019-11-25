import {Platform} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import Colors from'../constants/Colors'

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    About: AboutScreen
}, {
    defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})
export default createAppContainer(AppNavigator)