import { useContext, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { logInOrSignUp } from '../api';
import UserContext from '../contexts/UserContext';

import useSavedAccessToken from './useSavedAccessToken';


WebBrowser.maybeCompleteAuthSession();

const useGoogleLogin = (loginCallback = () => { }) => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '193382220725-rlqjk76utvargbvr1rrj0vu18o1etsn3.apps.googleusercontent.com',
        iosClientId: '193382220725-1amcuhiorqamhqcv3g53nmnsdln7n7pe.apps.googleusercontent.com',
        androidClientId: '193382220725-4s7jc9afsgmuaamf7lfbv36hcc91se91.apps.googleusercontent.com',
        webClientId: '193382220725-r8budtfndiqref86tjqaanm8m2l9k3tf.apps.googleusercontent.com',
    });

    const { setUser } = useContext(UserContext);
    const { saveAccessToken } = useSavedAccessToken();

    const returnUserInfo = async (accessToken) => {
        try {
            const user = await logInOrSignUp(accessToken);


            await saveAccessToken(accessToken);

            loginCallback(user);
            setUser(user);

           
        } catch (e) {
            loginCallback(null, e);
        }
    }

    useEffect(() => {
        if (!response) return;
        if (response?.type === 'success') {
            const { authentication } = response;
            returnUserInfo(authentication.accessToken);
        } else {
            console.log(response);
            if (response.type === 'dismiss') loginCallback(null, new Error("User cancelled login"));
            else loginCallback(null, new Error("Something went wrong, please try again"));
        }
    }, [response]);

    return {
        isReady: !!request,
        startLogin: promptAsync
    };
};

export default useGoogleLogin;