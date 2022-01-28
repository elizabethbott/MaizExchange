import React, { useContext, useState } from 'react';
import { Button } from 'react-native';
import UserContext from '../contexts/UserContext';
import useGoogleLogin from '../hooks/useGoogleLogin';


/**
 * A button that shows "Log In" if no one is logged in, or "Log Out"
 * otherwise, and logs in/out the user on press.
 */
const LogInOrOutButton = ({ onError = console.log }) => {
    const logIn = () => {
        setAwaitingLogin(true);
        startLogin();
       
    };
    const logOut = () => setUser(null);
    const handleLoginFinish = (newUser, error) => {
        setAwaitingLogin(false);
        if (error) onError(error);
    }

    const { isReady, startLogin } = useGoogleLogin(handleLoginFinish);
    const { user, setUser } = useContext(UserContext);
    const [awaitingLogin, setAwaitingLogin] = useState(false);

    return (
        <Button
            disabled={awaitingLogin || !isReady}
            title={user ? "Log Out" : "Log In"}
            onPress={user ? logOut : logIn}
        />
    );
};

export default LogInOrOutButton;