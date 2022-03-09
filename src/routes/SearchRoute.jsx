import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import ItemInformationScreen from '../screens/ItemInformation';

const Stack = createStackNavigator();

const SearchRoute = () => (
    <Stack.Navigator>
        <Stack.Screen name="Search Screen" component={SearchScreen} />
        <Stack.Screen name="Search Results" component={SearchResultsScreen} />
        <Stack.Screen name="Item Information" component={ItemInformationScreen} />
    </Stack.Navigator>
);

export default SearchRoute;