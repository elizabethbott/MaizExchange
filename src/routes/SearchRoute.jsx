import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';

const Stack = createStackNavigator();

const SearchRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="Search Screen" component={SearchScreen} />
        <Stack.Screen name="Search Results" component={SearchResultsScreen} />
    </Stack.Navigator>
);

export default SearchRoute;