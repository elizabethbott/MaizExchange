import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import LogInOrOutButton from '../components/LogInOrOutButton';
import UserContext from '../contexts/UserContext';
import HeaderComponent from '../components/HeaderComponent';
import ListingComponent from '../components/ListingComponent';
import ListingView from '../components/ListingView';

const HomeScreen = () => {
    const { user } = useContext(UserContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {user ? `Logged in as ${user.firstName} ${user.lastName}` :
                    "Log in with your UMich Google account:"}
            </Text>
            <LogInOrOutButton />
            <HeaderComponent />
            {/* <ListingComponent /> */}
            <ListingView />
            
        </View>
    );
};

export default HomeScreen;