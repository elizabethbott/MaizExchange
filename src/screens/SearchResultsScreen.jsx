import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { searchListings } from '../api';
import SearchBar from '../components/SearchBar';
import WideListingCard from '../components/WideListingCard';
import useDebounce from '../hooks/useDebounce';

const SearchResultsScreen = ({ route, navigation }) => {
    const [listings, setListings] = useState(null);
    const [maxPrice, setMaxPrice] = useState('');
    const [sort, setSort] = useState('recent');
    const [searchInput, setSearchInput] = useState('');

    const debouncedSearchInput = useDebounce(searchInput);
    const debouncedPriceInput = useDebounce(maxPrice);

    const { category, type } = route.params;

    const fetchListings = async () => {
        const { listings: newListings } = await searchListings({
            category,
            type,
            sort,
            searchTerm: debouncedSearchInput,
            maxPrice: debouncedPriceInput
        });
        setListings(newListings);
    };

    useEffect(() => {
        if (category && type) fetchListings();
    }, [category, type, sort, debouncedSearchInput, debouncedPriceInput]);

    const FillerText = () => (
        <View style={{ marginTop: 100, marginHorizontal: 20 }}>
            <Text style={{ color: 'darkgray', textAlign: 'center' }}>
                {!listings ? 'Loading...' : 'No listings found, please adjust your filters and try again.'}
            </Text>
        </View>
    );

    return (
        <ScrollView>
            <SearchBar
                sort={sort}
                setSort={setSort}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            {
                (listings && listings.length > 0) ? listings.map(listing => (
                    <WideListingCard listing={listing} onPress={navigation.navigate("Item Information", { category: category.value, type })}/>
                )) : (
                    <FillerText />
                )
            }
        </ScrollView>
    );
};

export default SearchResultsScreen;