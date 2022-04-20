import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from '../screens/NotificationsScreen';
import ChatRoom from '../screens/ChatRoom';

const Stack = createStackNavigator();

const NotificationsRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="Notifications Screen" component={NotificationsScreen} />
        <Stack.Screen name="Chat Screen" component={ChatRoom} />
    </Stack.Navigator>
);

export default NotificationsRoute;