import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from '../screens/NotificationsScreen';

const Stack = createStackNavigator();

const NotificationsRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="Notifications Screen" component={NotificationsScreen} />
    </Stack.Navigator>
);

export default NotificationsRoute;