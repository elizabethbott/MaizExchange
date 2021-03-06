import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import UserContext from './src/contexts/UserContext';
import HomeRoute from './src/routes/HomeRoute';
import SettingsRoute from './src/routes/SettingsRoute';
import LoginScreen from './src/screens/LoginScreen';
import NewListingRoute from './src/routes/NewListingRoute';
import NotificationsRoute from './src/routes/NotificationsRoute';
import SearchRoute from './src/routes/SearchRoute';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabIcon = ({ name, focused }) => (
    <Icon name={name} size={30} color={focused ? '#0000FF' : '#808080'} />
);

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <SafeAreaProvider>
                <NavigationContainer>
                    {user ? (
                        <Tab.Navigator screenOptions={{ headerShown: false }}>
                            <Tab.Screen name="HomeTab" component={HomeRoute} options={{
                                tabBarIcon: ({ focused }) => <TabIcon name={`home${!focused ? '-outline' : ''}`} focused={focused} />,
                                title: "Home"
                            }} />
                            <Tab.Screen name="SearchTab" component={SearchRoute} options={{
                                tabBarIcon: ({ focused }) => <TabIcon name={`search-circle-${!focused ? 'outline' : 'sharp'}`} focused={focused} />,
                                title: "Search"
                            }} />
                            <Tab.Screen name="ListingTab" component={NewListingRoute} options={{
                                tabBarIcon: ({ focused }) => <TabIcon name={`ios-create${!focused ? '-outline' : ''}`} focused={focused} />,
                                title: "New Listing"
                            }} />
                            <Tab.Screen name="NotificationsTab" component={NotificationsRoute} options={{
                                tabBarIcon: ({ focused }) => <TabIcon name={`notifications${!focused ? '-outline' : ''}`} focused={focused} />,
                                title: "Notifications"
                            }} />
                            <Tab.Screen name="SettingsTab" component={SettingsRoute} options={{
                                tabBarIcon: ({ focused }) => <TabIcon name={`person-circle${!focused ? '-outline' : ''}`} focused={focused} />,
                                title: "Settings"
                            }} />
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
