import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExampleComponent from '../components/ExampleComponent';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Example screen for settings - hello world!</Text>
            <ExampleComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingsScreen;