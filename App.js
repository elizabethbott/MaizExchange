import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserContext from './src/contexts/UserContext';
import HomeRoute from './src/routes/HomeRoute';
import SettingsRoute from './src/routes/SettingsRoute';
import NewListingRoute from './src/routes/NewListingRoute';
import NotificationsRoute from './src/routes/NotificationsRoute';
import SearchRoute from './src/routes/SearchRoute';
import Icon from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{ headerShown: false }}>
                        <Tab.Screen name="Home" component={HomeRoute} options={{tabBarIcon: () => <Icon name="home" size={30}/>}}/>
                        <Tab.Screen name="Search" component={SearchRoute} options={{tabBarIcon: () => <Icon name="search1" size={30}/>}}/>
                        <Tab.Screen name="New Listing" component={NewListingRoute} options={{tabBarIcon: () => <Icon name="plussquareo" size={30}/>}}/>
                        <Tab.Screen name="Notifications" component={NotificationsRoute} options={{tabBarIcon: () => <Icon name="bells" size={30}/>}} />
                        <Tab.Screen name="Settings" component={SettingsRoute} options={{tabBarIcon: () => <Icon name="setting" size={30}/>}}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </UserContext.Provider>
    );
}
