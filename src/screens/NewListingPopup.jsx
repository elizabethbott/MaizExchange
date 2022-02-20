import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { postListing } from '../api';
import AppStyle from '../AppStyle';
import Button from '../components/Button';

const NewListingPopup = ({ navigation, route }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [waiting, setWaiting] = useState(false);

    const { category, type } = route.params;

    const processPriceInput = p => {
        p = p.replace("$", "").replace(" ", "");
        setPrice(p);
    };

    const onPriceBlur = () => {
        const roundedPrice = parseFloat(price).toFixed(2);
        if (roundedPrice === "NaN") return "";
        setPrice(roundedPrice);
        return roundedPrice;
    };

    const onSubmit = async () => {
        setWaiting(true);
        const finalPrice = onPriceBlur();
        Keyboard.dismiss();
        await postListing({
            title,
            price: parseFloat(finalPrice),
            category,
            type,
            description
        });
        setWaiting(false);
        navigation.goBack();
        // TODO: Better feedback that the posting was listed
    }

    const submitDisabled = !price || !title || waiting;
    const typeRender = type === "other" ? category : type;

    return (
        <ScrollView style={styles.rootContainer} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
            <Text style={[AppStyle.classes.header, styles.caps]}>Selling {typeRender}</Text>
            {type !== "other" && (
                <Text style={[styles.caps, { marginTop: 10 }]}>Category: {category}</Text>
            )}

            <Text style={styles.sectionheaders}>
                {type === "ticket" ? "Opponent Name" : "Item Name"}
            </Text>
            <TextInput
                style={styles.textfields}
                value={title}
                onChangeText={setTitle}
            />

            <View>
                <Text style={styles.sectionheaders}>Price</Text>
            </View>
            <TextInput
                style={[styles.textfields, { width: 100 }]}
                value={"$ " + price}
                keyboardType='numeric'
                onChangeText={processPriceInput}
                onBlur={onPriceBlur}
                maxLength={8}

            />

            {type !== "ticket" && (
                <>
                    <Text style={styles.sectionheaders}>Notes</Text>
                    <TextInput
                        style={[styles.textfields, { height: 80 }]}
                        value={description}
                        placeholder="Describe the item you're selling..."
                        onChangeText={setDescription}
                        multiline
                    />
                </>
            )}

            <View style={styles.buttonWrapper}>
                <Button label="Post Listing" wide filled bold onPress={onSubmit} disabled={submitDisabled} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 15,
        marginLeft: 15
    },
    sectionheaders: {
        fontSize: 12,
        fontWeight: "900",
        marginTop: 16,
        marginBottom: 4,
        marginLeft: 8,
    },
    textfields: {
        height: 40,
        width: '85%',
        borderColor: '#00274C',
        borderWidth: 1,
        //backgroundColor: '#D3D3D3', 
        padding: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        marginLeft: 8,
    },
    buttonWrapper: {
        marginHorizontal: '10%',
        marginTop: 15
    },
    caps: {
        textTransform: 'capitalize'
    }
})

export default NewListingPopup;