import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStyle from '../AppStyle';
import LogInOrOutButton from '../components/LogInOrOutButton';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        textAlign: 'center',
        marginBottom: 20
    }
})

const LoginScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={[AppStyle.classes.header, styles.center]}>Welcome to MaizExchange</Text>
            <Text style={[styles.center, { marginBottom: 8 }]}>Please log in with your U-M Google account:</Text>
            <View style={{ width: '80%', maxWidth: 300 }}>
                <LogInOrOutButton wide />
            </View>
        </View>
    );
};

export default LoginScreen;