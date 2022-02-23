import React, { useContext } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import UserContext from '../contexts/UserContext';
import { RadioButton, Button } from 'react-native-paper';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';


const NewListingScreen = () => {
    const { user } = useContext(UserContext);
    const [checked, setChecked] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');

    const text = "test";
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
    }

    //TextInput onchange (calls function on every key stroke) & value props
    // store value from onChange to state 

    //define new state variables for each TextInput
    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
                color="#00274C"
                uncheckedColor='#EAE8E4'
            /></View>

            {
                ( checked === 'first') && Category()
            }

            
            <View style={styles.radiobutton}><Text>Textbooks</Text><RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
                color="#00274C"
                uncheckedColor='#EAE8E4'
            /></View>

            {   
                ( checked === 'second') && Category()
            }

            <View style={styles.radiobutton}><Text>Other</Text><RadioButton
                value="third"
                status={ checked === 'third' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('third')}
                color="#00274C"
                uncheckedColor='#EAE8E4'
            /></View>
            {
                ( checked === 'third') && Category()
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
            
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        //width: '50%',
        //marginLeft: '25%',
    },

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
        padding:4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        marginLeft: 8,
    },

    categoryfields: {
        height: 40, 
        width: '100%', 
        borderColor: '#00274C', 
        borderWidth: 1, 
        //backgroundColor: '#D3D3D3', 
        padding:4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        marginLeft: 8,
    },

    buttonboi: {
        margin: 16,
    }
});

export default NewListingScreen;