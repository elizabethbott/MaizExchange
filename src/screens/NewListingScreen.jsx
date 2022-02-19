import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import EnIcon from 'react-native-vector-icons/Entypo';
import AppStyle from '../AppStyle';
import Dropdown from '../components/Dropdown';

const categories = [
    { label: "Ticket", value: "ticket", icon: "ticket" },
    { label: "Textbook", value: "textbook", icon: "book" },
    { label: "Other/Misc.", value: "other", icon: "box" }
];

const NewListingScreen = () => {
    const [checked, setChecked] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const press = () => {
        alert('button pressed');
        alert(description);
        setDescription('');
        setChecked("first");
        setCategory('');
        setPrice(0);
    }

    const Category = () => {
        return (
            <View style={styles.categories}>
                <Text>Category</Text>
                <TextInput
                    style={styles.categoryfields}
                    value={category}
                    onChangeText={setCategory}
                    placeholder="Category"
                />
            </View>
        );
    };

    return (
        <ScrollView>
            <Text style={AppStyle.classes.header}>
                What would you like to sell?
            </Text>
            <Text style={styles.sectionheaders}>Add Description</Text>
            <TextInput
                style={styles.textfields}
                value={description}
                placeholder="Description"
                onChangeText={setDescription}
            />

            <Text style={styles.sectionheaders}>Type</Text>
            {
                categories.map((cat, i) => (
                    <Dropdown
                        topBorder={i === 0}
                        title={(
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <EnIcon name={cat.icon} size={16} color="black" style={{ marginRight: 5 }} />
                                <Text>{cat.label}</Text>
                            </View>
                        )}
                    >
                        <Category />
                    </Dropdown>
                ))
            }

            {/*<View style={styles.radiobutton}><Text>Other</Text><RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
                color="#00274C"
                uncheckedColor='#EAE8E4'
        /></View>*/}

            <View>
                <Text style={styles.sectionheaders}>Price</Text>
            </View>
            <TextInput
                style={styles.textfields}
                value={price}
                keyboardType='numeric'
                onChangeText={setPrice}
                placeholder="$$"
                maxLength={10}
            />

            <View style={styles.buttonboi}>
                <Button onPress={press} icon="card-plus" mode="contained" color="#FFCB05">
                    Create Listing
                </Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    radiobutton: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        borderTopWidth: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#EAE8E4',
    },
    sectionheaders: {
        fontSize: 12,
        fontWeight: "900",
        marginTop: 16,
        marginBottom: 4,
        marginLeft: 8,
    },
    categories: {
        paddingLeft: 32,
        fontSize: 10,
        fontWeight: '200',
        marginTop: 16,
        marginBottom: 16,
        width: '75%',
    },
    textfields: {
        height: 40,
        width: '75%',
        borderColor: '#00274C',
        borderWidth: 1,
        //backgroundColor: '#D3D3D3', 
        padding: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        marginLeft: 8,
    },
    categoryfields: {
        height: 40,
        width: '100%',
        borderColor: '#00274C',
        borderWidth: 1,
        //backgroundColor: '#D3D3D3', 
        padding: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        marginLeft: 8,
    },
    buttonboi: {
        margin: 16,
    }
});

export default NewListingScreen;