import React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';

const NewListingScreen = () => {
    const [checked, setChecked] = React.useState('first');
    const [description, setDescription] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState(0);

    const press = () => {
        alert('button pressed');
        alert(description);
        alert(checked);
        alert(category);
        alert(price);
        setDescription('');
        setChecked("first");
        setCategory('');
        setPrice(0);
    }

    //TextInput onchange (calls function on every key stroke) & value props
    // store value from onChange to state 

    //define new state variables for each TextInput
    return (
        <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.container}>
                    <Text style={styles.sectionheaders}>Add Description</Text>
                    <TextInput
                        style={styles.textfields}
                        value={description}
                        placeholder="Description"
                        onChangeText={setDescription}
                    />

                    <Text style={styles.sectionheaders}>Type</Text>
                    <View style={styles.radiobutton}><Text>Tickets</Text><RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color="#00274C"
                    /></View>

                    {
                        (checked === 'first') &&
                        <View style={styles.categories}>
                            <Text>Category</Text>
                            <TextInput
                                style={styles.textfields}
                                value={category}
                                onChangeText={setCategory}
                                placeholder="Category"

                            />
                        </View>
                    }

                    <View style={styles.radiobutton}><Text>Textbooks</Text><RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        color="#00274C"
                    /></View>

                    {
                        (checked === 'second') &&
                        <View style={styles.categories}>
                            <Text>Category</Text>
                            <TextInput
                                style={styles.textfields}
                                value={category}
                                onChangeText={setCategory}
                                placeholder="Category"
                            />
                        </View>
                    }

                    <View style={styles.radiobutton}><Text>Other</Text><RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                        color="#00274C"
                    /></View>

                    {
                        (checked === 'third') &&
                        <View style={styles.categories}>
                            <Text>Category</Text>
                            <TextInput
                                style={styles.textfields}
                                value={category}
                                onChangeText={setCategory}
                                placeholder="Category"
                            />
                        </View>
                    }

                    <Text style={styles.sectionheaders}>Price</Text>
                    <TextInput
                        style={styles.textfields}
                        value={price}
                        keyboardType='numeric'
                        onChangeText={setPrice}
                        placeholder="$$"
                        maxLength={10}
                    />

                    <View style={styles.buttonboi}><Button onPress={press} icon="card-plus" mode="contained" color="#FFCB05">
                        Create Listing
                    </Button></View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'center',
        width: '50%'
    },
    radiobutton: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        borderTopWidth: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sectionheaders: {
        fontSize: 12,
        fontWeight: "900",
        marginTop: 16,
        marginBottom: 4
    },
    categories: {
        paddingLeft: 32,
        fontSize: 10,
        fontWeight: '200',
        marginTop: 16,
        marginBottom: 16,
    },
    textfields: {
        height: 40,
        width: '75%',
        borderColor: '#00274C',
        borderWidth: 1,
        //backgroundColor: '#D3D3D3', 
        padding: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
    },
    buttonboi: {
        margin: 8,
        marginRight: 50,
        marginLeft: 50
    }
});

export default NewListingScreen;