import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
);

export default HomeRoute;