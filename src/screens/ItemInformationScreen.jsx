import React, { useEffect, useState } from 'react';
import { Image, Text, StyleSheet, ScrollView , View, Alert} from 'react-native';
import AppStyle from '../AppStyle';
import Button from '../components/Button';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemInformationScreen = ({ route, navigation }) => {
    const { title, first_name, last_name, price, type, category } = route.params.listing;
    
    
    const purchase = () => {
        console.log("heyy ;)");
        Alert.alert(
            "Purchase Clicked",
            "Would you like to purchase this item?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        console.log("Yes pressed");
                        navigation.goBack()
                    }
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
              ]
        );
    }

    return (
        <ScrollView>
            <Text style={[AppStyle.classes.header, { marginHorizontal: 10, marginVertical: 20 }]}>
                {category} {type} for <Text>{title}</Text>
            </Text> 
            <Image source={require('../../assets/favicon.png')} resizeMode="cover" style={styles.image} />
            <Text style={styles.sectionheaders}>
                Seller: {first_name} {last_name}
            </Text>
            <Text style={styles.priceStyle}>
                ${price.toFixed(2)}
            </Text>
            <View style={styles.buttonwrapper}>
            <Button
                label={"Purchase"}
                icon={<MCIcon name={"currency-usd"} size={18} color="white" />}
                filled
                bold
                onPress={purchase}
            />
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 85,
        width: 85,
        marginLeft: 8
    },

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
    },

    buttonwrapper: {
        width: '50%',
        marginVertical: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default ItemInformationScreen;