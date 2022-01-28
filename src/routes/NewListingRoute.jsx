import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewListingScreen from '../screens/NewListingScreen';

const Stack = createStackNavigator();

const NewListingRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="New Listing Screen" component={NewListingScreen} />
    </Stack.Navigator>
);

export default NewListingRoute;