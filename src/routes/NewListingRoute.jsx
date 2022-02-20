import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewListingScreen from '../screens/NewListingScreen';
import NewListingPopup from '../screens/NewListingPopup';

const Stack = createStackNavigator();

const NewListingRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="New Listing" component={NewListingScreen} />
        <Stack.Screen name="Listing Form" component={NewListingPopup} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
);

export default NewListingRoute;