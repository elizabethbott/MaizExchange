import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView , View} from 'react-native';
import AppStyle from '../AppStyle';
import Button from '../components/Button';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemInformationScreen = ({ route, navigation }) => {
    const { title, first_name, last_name, price, type, category } = route.params.listing;
    
    return (
        <ScrollView>
            <Text style={[AppStyle.classes.header, { marginHorizontal: 10, marginVertical: 20 }]}>
                {title}
            </Text> 
            <Text style={styles.sectionheaders}>
                Seller: {first_name} {last_name}
            </Text>
            <Text style={styles.priceStyle}>
                ${price.toFixed(2)}
            </Text>
            <Button
                label={"purchase"}
                icon={<MCIcon name={"store-plus"} size={18} color="white" />}
                filled
                bold
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    sectionheaders: {
        fontSize: 18,
        fontWeight: "900",
        marginTop: 16,
        marginBottom: 4,
        marginLeft: 8,
    },

    priceStyle: {
        fontWeight: 'bold',
        marginLeft: 9,
        fontSize: 18,
    }
});

export default ItemInformationScreen;