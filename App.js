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
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function App() {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{ headerShown: false }}>
                        <Tab.Screen name="Home" component={HomeRoute} options={{tabBarIcon: ({focused}) => {
                        if (focused){return <Icon name="home" size={30} color={'#0000FF'}/>;}
                        else {return <Icon name="home-outline" size={30} color={'#0000FF'}/>;}
                        }
                        }}/>
                        <Tab.Screen name="Search" component={SearchRoute} options={{tabBarIcon: ({focused}) => {
                        if (focused){return <Icon name="search-circle-sharp" size={30} color={'#0000FF'}/>;}
                        else {return <Icon name="search-circle-outline" size={30} color={'#0000FF'}/>;}
                        }
                        }}/>
                        <Tab.Screen name="New Listing" component={NewListingRoute} options={{tabBarIcon: ({focused}) => {
                        if (focused){return <Icon name="ios-create" size={30} color={'#0000FF'}/>;}
                        else {return <Icon name="ios-create-outline" size={30} color={'#0000FF'}/>;}
                        }
                        }}/>
                        <Tab.Screen name="Notifications" component={NotificationsRoute} options={{tabBarIcon: ({focused}) => {
                        if (focused){return <Icon name="notifications-sharp" size={30} color={'#0000FF'}/>;}
                        else {return <Icon name="notifications-outline" size={30} color={'#0000FF'}/>;}
                        }
                        }}/>
                        <Tab.Screen name="Settings" component={SettingsRoute} options={{tabBarIcon: ({focused}) => {
                        if (focused){return <Icon name="settings" size={30} color={'#0000FF'}/>;}
                        else {return <Icon name="settings-outline" size={30} color={'#0000FF'}/>;}
                        }
                        }}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </UserContext.Provider>
    );
}
