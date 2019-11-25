import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

const HomeScreen = props => {

    return (

            <View style={styles.container}>
               <Text>Home</Text>
            </View>
      
    );
};

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: "Home"
    };
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