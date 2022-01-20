import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import useGoogleLogin from '../hooks/useGoogleLogin';

WebBrowser.maybeCompleteAuthSession();

const HomeScreen = () => {
    const onLogin = ({ email, firstName, lastName }) => {
        console.log(email, firstName, lastName);
    }

    const { isReady, startLogin } = useGoogleLogin(onLogin);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Click button below to login with google:</Text>
            <Button
                disabled={!isReady}
                title="Login"
                onPress={startLogin}
            />
        </View>
    );
};

export default HomeScreen;