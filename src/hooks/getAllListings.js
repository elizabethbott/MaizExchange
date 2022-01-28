import { useContext, useEffect } from 'react';
import { getListings } from '../api';

const getAllListings = (loginCallback = () => { }) => {

    const returnUserInfo = async () => {
        try {
            const user = await logInOrSignUp();
            loginCallback(user);
            setUser(user);
        } catch (e) {
            loginCallback(null, e);
        }
    }

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            returnUserInfo(authentication.accessToken);
        } else {
            console.log(response);
        }
    }, [response]);


};
export default getAllListings;