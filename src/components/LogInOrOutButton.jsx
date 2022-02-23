import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import useGoogleLogin from '../hooks/useGoogleLogin';
import useSavedAccessToken from '../hooks/useSavedAccessToken';
import Button from './Button';


/**
 * A button that shows "Log In" if no one is logged in, or "Log Out"
 * otherwise, and logs in/out the user on press.
 */
const LogInOrOutButton = ({ onError = console.log, disabled, ...props }) => {
    const logIn = () => {
        setAwaitingLogin(true);
        startLogin();
       
    };
    const logOut = async () => {
        await saveAccessToken("");
        setUser(null);
    }
    const handleLoginFinish = (newUser, error) => {
        setAwaitingLogin(false);
        if (error) onError(error);
    }

    const { saveAccessToken } = useSavedAccessToken();
    const { isReady, startLogin } = useGoogleLogin(handleLoginFinish);
    const { user, setUser } = useContext(UserContext);
    const [awaitingLogin, setAwaitingLogin] = useState(false);

    return (
        <Button
            disabled={disabled || awaitingLogin || !isReady}
            label={user ? "Log Out" : "Log In"}
            onPress={user ? logOut : logIn}
            filled
            {...props}
        />
    );
};

export default LogInOrOutButton;