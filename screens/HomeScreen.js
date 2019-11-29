import React from 'react';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native';
import { Platform } from 'react-native'

const HomeScreen = props => {

    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
            <Button
                title="View All Places"
                onPress={() => navigate('ListPlaces')}
            />
        </View>


    );
};

// NAVIGATION
HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'HomeScreen ',
        headerRight:
            (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="About"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate("NewPlace")
                    }}
                />
            </HeaderButtons>
            )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HomeScreen;