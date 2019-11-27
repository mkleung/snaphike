import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import Colors from '../constants/Colors'

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    NewPlace: NewPlaceScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})
export default createAppContainer(AppNavigator)