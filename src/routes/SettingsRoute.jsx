import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const SettingsRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="Settings Screen" component={SettingsScreen} />
    </Stack.Navigator>
);

export default SettingsRoute;