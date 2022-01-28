import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { logInOrSignUp } from '../api';
import AppStyle from '../AppStyle';
import LogInOrOutButton from '../components/LogInOrOutButton';
import UserContext from '../contexts/UserContext';
import useSavedAccessToken from '../hooks/useSavedAccessToken';

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
    const [ready, setReady] = useState(false);
    const { setUser } = useContext(UserContext);
    const { accessToken } = useSavedAccessToken();

    const tryAccessToken = async () => {
        const user = await logInOrSignUp(accessToken);
        if (user.result !== "error") {
            setUser(user);
        } else setReady(true);
    };

    useEffect(() => {
        if (accessToken) {
            setReady(false);
            tryAccessToken();
        } else setReady(true);
    }, [accessToken]);

    return (
        <View style={styles.screen}>
            <Text style={[AppStyle.classes.header, styles.center]}>Welcome to MaizExchange</Text>
            <Text style={[styles.center, { marginBottom: 8 }]}>Please log in with your U-M Google account:</Text>
            <View style={{ width: '80%', maxWidth: 300 }}>
                <LogInOrOutButton wide disabled={!ready} />
            </View>
        </View>
    );
};

export default LoginScreen;