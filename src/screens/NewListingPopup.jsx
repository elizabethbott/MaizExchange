import React, { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { postListing } from '../api';
import AppStyle from '../AppStyle';
import Button from '../components/Button';
import PriceInput from '../components/PriceInput';

const NewListingPopup = ({ navigation, route }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [waiting, setWaiting] = useState(false);
    const [condition, setCondition] = useState('');

    const {
        category: {
            label: categoryLabel,
            value: categoryValue
        },
        type
    } = route.params;

    const finalizeSubmit = async () => {
        await postListing({
            title,
            price: parseFloat(price),
            category: categoryValue,
            type,
            description,
            condition
        });
        setWaiting(false);
        navigation.goBack();
        // TODO: Better feedback that the posting was listed
    };

    const onSubmit = async () => {
        setWaiting(true);
        Keyboard.dismiss();
        // This is probably poor practice but we need the price formatter to do its magic first
        setTimeout(finalizeSubmit, 50);
    };

    const submitDisabled = !price || !title || waiting;

    return (
        <ScrollView style={styles.rootContainer} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
            <Text style={[AppStyle.classes.header, styles.caps]}>Selling {categoryLabel} {type !== "other" && type}</Text>

            <Text style={styles.sectionheaders}>
                {type === "ticket" ? "Opponent Name" : "Item Name"}
            </Text>
            <TextInput
                style={styles.textfields}
                value={title}
                onChangeText={setTitle}
            />

            <View>
                <Text style={styles.sectionheaders}>Price ($0-$1000)</Text>
            </View>
            <PriceInput price={price} setPrice={setPrice} />

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

            {type === "textbook" && (
                <>
                    <Text style={styles.sectionheaders}>Condition</Text>
                    <TextInput 
                        style={[styles.textfields, {height: 40}]}
                        value={condition}
                        placeholder="Describe the condition of the item..."
                        onChangeText={setCondition}
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