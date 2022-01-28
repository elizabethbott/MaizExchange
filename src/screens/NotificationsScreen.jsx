import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LogInOrOutButton from '../components/LogInOrOutButton';
import UserContext from '../contexts/UserContext';
import Icon from 'react-native-vector-icons/AntDesign';
const NotificationsScreen = () => {
    const { user } = useContext(UserContext);

    /*return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {user ? `Logged in as ${user.firstName} ${user.lastName}` :
                    "Log in with your UMich Google account:"}
            </Text>
            <LogInOrOutButton />
        </View>
    );*/
    return (
        <View style={styles.container}>
            <Text>Notifications Page</Text>
            <Icon name="home" />
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

export default NotificationsScreen;