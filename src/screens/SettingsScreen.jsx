import { StyleSheet, Text, View } from 'react-native';
import ExampleComponent from '../components/ExampleComponent';
import React, { useContext } from 'react';
import showLogin from '../components/showLogin';
import UserContext from '../contexts/UserContext';
import LogInOrOutButton from '../components/LogInOrOutButton';



const SettingsScreen = () => {
    const { user } = useContext(UserContext);
    return (
        <View style={styles.container}>
            <Text>Example screen for settings - hello world!</Text>
            <ExampleComponent />

            <Text >
                {user ? `Logged in as ${user.firstName} ${user.lastName}` :
                    "Log in with your UMich Google account:"}
            </Text>
            <LogInOrOutButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingsScreen;