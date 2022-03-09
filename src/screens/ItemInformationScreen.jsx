import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { searchListings } from '../api';
import SearchBar from '../components/SearchBar';
import WideListingCard from '../components/WideListingCard';
import useDebounce from '../hooks/useDebounce';

const ItemInformationScreen = ({ route, navigation }) => {
    const { title, first_name, last_name, price, type, category } = listing;
    
    return (
        <ScrollView>
            <Text>
                {title}
            </Text> 
            <Text>
                Seller: {first_name} {last_name}
            </Text>
            <Text>
                {price}
            </Text>
            <Text>
                
            </Text>
        </ScrollView>
    );
};