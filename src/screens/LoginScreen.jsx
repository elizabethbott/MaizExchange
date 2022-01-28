import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import LogInOrOutButton from '../components/LogInOrOutButton';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const LoginScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Log in to your UMich account:</Text>
            <LogInOrOutButton />
        </View>
    );
};

export default LoginScreen;