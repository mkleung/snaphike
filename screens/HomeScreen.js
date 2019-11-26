import React from 'react';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { Platform } from 'react-native'

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

// NAVIGATION
HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'HomeScreen ',
        headerRight: 
            (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="About"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate("About")
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