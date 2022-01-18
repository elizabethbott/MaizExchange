import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { getGoogleAccountInfo } from '../api';

WebBrowser.maybeCompleteAuthSession();

const HomeScreen = () => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '193382220725-rlqjk76utvargbvr1rrj0vu18o1etsn3.apps.googleusercontent.com',
        iosClientId: '193382220725-1amcuhiorqamhqcv3g53nmnsdln7n7pe.apps.googleusercontent.com',
        androidClientId: '193382220725-4s7jc9afsgmuaamf7lfbv36hcc91se91.apps.googleusercontent.com',
        webClientId: '193382220725-r8budtfndiqref86tjqaanm8m2l9k3tf.apps.googleusercontent.com',
    });

    const getUserInfo = async (accessToken) => {
        const info = await getGoogleAccountInfo(accessToken);
        console.log(info);
    };

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            getUserInfo(authentication.accessToken);
        } else {
            console.log(response);
        }
    }, [response]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Click button below to login with google:</Text>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => {
                    promptAsync();
                }}
            />
        </View>
    );
};

export default HomeScreen;