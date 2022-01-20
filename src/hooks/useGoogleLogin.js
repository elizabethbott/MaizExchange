import React, { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { logInOrSignUp } from '../api';

const useGoogleLogin = (loginCallback) => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '193382220725-rlqjk76utvargbvr1rrj0vu18o1etsn3.apps.googleusercontent.com',
        iosClientId: '193382220725-1amcuhiorqamhqcv3g53nmnsdln7n7pe.apps.googleusercontent.com',
        androidClientId: '193382220725-4s7jc9afsgmuaamf7lfbv36hcc91se91.apps.googleusercontent.com',
        webClientId: '193382220725-r8budtfndiqref86tjqaanm8m2l9k3tf.apps.googleusercontent.com',
    });

    const returnUserInfo = async (accessToken) => {
        const user = await logInOrSignUp(accessToken);
        loginCallback(user);
    }

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            returnUserInfo(authentication.accessToken);
        } else {
            console.log(response);
        }
    }, [response]);

    return {
        isReady: !!request,
        startLogin: promptAsync
    };
};

export default useGoogleLogin;