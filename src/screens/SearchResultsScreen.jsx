import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { searchListings } from '../api';

const WideListingCard = ({ listing, onPress }) => {
    const { title, first_name, last_name, price, type, category } = listing;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={require('../../assets/favicon.png')} resizeMode="cover" style={styles.image} />
            <View style={{ paddingVertical: 10, justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>
                    {title} {type === "ticket" && `${category} ticket`}
                </Text>
                <Text numberOfLines={1}>
                    <Text style={{ fontWeight: 'bold' }}>${price.toFixed(2)}</Text>
                    {" "} - Seller: {first_name} {last_name}
                </Text>
            </View>
            <View style={styles.chevron}>
                <Icon name="chevron-forward-outline" size={20} color="black" />
            </View>
        </TouchableOpacity>
    );
};

const SearchResultsScreen = ({ route }) => {
    const [listings, setListings] = useState(null);

    const { category, type } = route.params;

    const fetchListings = async () => {
        const { listings: newListings } = await searchListings({ category, type });
        setListings(newListings);
    }

    useEffect(() => {
        if (category && type) fetchListings();
    }, [category, type]);

    const FillerText = () => (
        <View style={{ marginTop: 100, marginHorizontal: 20 }}>
            <Text style={{ color: 'darkgray', textAlign: 'center' }}>
                {!listings ? 'Loading...' : 'No listings found, please adjust your filters and try again.'}
            </Text>
        </View>
    );

    return (
        <ScrollView>
            {
                (listings && listings.length > 0) ? listings.map(listing => (
                    <WideListingCard listing={listing} />
                )) : (
                    <FillerText />
                )
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#d6d6d6',
        borderRadius: 10,
        margin: 10
    },
    image: {
        height: 75,
        width: 75,
        marginRight: 10
    },
    chevron: {
        marginLeft: 'auto',
        justifyContent: 'center',
        marginRight: 10
    }
})

export default SearchResultsScreen;