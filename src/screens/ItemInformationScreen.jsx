import React from 'react';
import { Text, StyleSheet, ScrollView, View, Alert } from 'react-native';
import AppStyle from '../AppStyle';
import Button from '../components/Button';
import alert from '../util/alert';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { startListingSale } from '../api';
import IconMap from '../util/icons';

const ItemInformationScreen = ({ route, navigation }) => {
    const { id, title, first_name, last_name, price, type, category } = route.params.listing;

    const executePurchase = async () => {
        await startListingSale(id);
        alert(
            "Item purchased",
            "An email confirmation has been sent to both you and the seller. Please communicate with the seller via email to determine an exchange date and payment method."
        );
        navigation.goBack();
    }

    const purchase = () => {
        alert(
            "Purchase Clicked",
            "Would you like to purchase this item?",
            [
                {
                    text: "Yes",
                    onPress: executePurchase
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
            <Text style={[AppStyle.classes.header, styles.title]}>
                {category} {type}: <Text>{title}</Text>
            </Text>
            <MCIcon name={IconMap[category]} size={48} color="black" />
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
    title: {
        marginHorizontal: 10,
        marginVertical: 20,
        textTransform: 'capitalize'
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