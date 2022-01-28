import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const SearchRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="Search Screen" component={SearchScreen} />
    </Stack.Navigator>
);

export default SearchRoute;