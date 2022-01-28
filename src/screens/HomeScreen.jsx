import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import LogInOrOutButton from '../components/LogInOrOutButton';
import UserContext from '../contexts/UserContext';

const HomeScreen = () => {
    const { user } = useContext(UserContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 20 }}>
                Hello this is home screen. You are logged in as {user.firstName} {user.lastName}
            </Text>
            <LogInOrOutButton filled={false} />
        </View>
    );
};

export default HomeScreen;