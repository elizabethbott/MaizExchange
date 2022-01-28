import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import UserContext from './src/contexts/UserContext';
import HomeRoute from './src/routes/HomeRoute';
import SettingsRoute from './src/routes/SettingsRoute';
import LoginScreen from './src/screens/LoginScreen';
import NewListingRoute from './src/routes/NewListingRoute';
import NotificationsRoute from './src/routes/NotificationsRoute';
import SearchRoute from './src/routes/SearchRoute';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <SafeAreaProvider>
                <NavigationContainer>
                    {user ? (
                        <Tab.Navigator screenOptions={{ headerShown: false }}>
                            <Tab.Screen name="Home" component={HomeRoute} options={{ tabBarIcon: () => <Icon name="home" size={30} /> }} />
                            <Tab.Screen name="Search" component={SearchRoute} options={{ tabBarIcon: () => <Icon name="search1" size={30} /> }} />
                            <Tab.Screen name="New Listing" component={NewListingRoute} options={{ tabBarIcon: () => <Icon name="plussquareo" size={30} /> }} />
                            <Tab.Screen name="Notifications" component={NotificationsRoute} options={{ tabBarIcon: () => <Icon name="bells" size={30} /> }} />
                            <Tab.Screen name="Settings" component={SettingsRoute} options={{ tabBarIcon: () => <Icon name="setting" size={30} /> }} />
                        </Tab.Navigator>
                    ) : (
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Login" component={LoginScreen} />
                        </Stack.Navigator>
                    )}
                </NavigationContainer>
            </SafeAreaProvider>
        </UserContext.Provider>
    );
}
