import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const tokenKey = "@ACCESS_TOKEN";

const useSavedAccessToken = () => {
    const [accessToken, setAccessToken] = useState(null);

    const getAccessToken = async () => {
        const token = await AsyncStorage.getItem(tokenKey);
        setAccessToken(token);
    }

    useEffect(() => {
        getAccessToken();
    }, []);

    const saveAccessToken = async (token) => {
        await AsyncStorage.setItem(tokenKey, token);
    }

    return {
        accessToken,
        saveAccessToken
    };
};

export default useSavedAccessToken;