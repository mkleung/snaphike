import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

const AboutScreen = props => {

    return (

            <View style={styles.container}>
               <Text>About</Text>
            </View>
      
    );
};

AboutScreen.navigationOptions = navData => {
    return {
        headerTitle: "About"
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

export default AboutScreen;