import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WideListingCard = ({ listing, onPress }) => {
    const { title, first_name, last_name, price, type, category } = listing;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={require('../../assets/favicon.png')} resizeMode="cover" style={styles.image} />
            <View style={{ paddingVertical: 15, justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, textTransform: 'capitalize' }} numberOfLines={1}>
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#d6d6d6',
        borderRadius: 10,
        margin: 10
    },
    image: {
        height: 85,
        width: 85,
        marginRight: 10
    },
    chevron: {
        marginLeft: 'auto',
        justifyContent: 'center',
        marginRight: 10
    }
});

export default WideListingCard;