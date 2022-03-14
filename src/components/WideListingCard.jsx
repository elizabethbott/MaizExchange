import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMap from '../util/icons';

const WideListingCard = ({ listing, onPress }) => {
    const { title, first_name, last_name, price, type, category } = listing;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MCIcon name={IconMap[category]} style={styles.icon} size={52} color="black" />
            <View style={{ paddingVertical: 15, justifyContent: 'space-between', height: 80 }}>
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
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
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
    },
    icon: {
        paddingLeft: 4,
        paddingRight: 4
    }
});

export default WideListingCard;