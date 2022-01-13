import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStyle from '../AppStyle';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={AppStyle.classes.header}>Example screen - hello world!</Text>
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

export default HomeScreen;