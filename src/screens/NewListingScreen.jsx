import React, { useContext } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import UserContext from '../contexts/UserContext';
import { RadioButton, Button } from 'react-native-paper';

const NewListingScreen = () => {
    const { user } = useContext(UserContext);
    const [checked, setChecked] = React.useState('first');
    //const [number, onChangeNumber] = React.useState(null);

    const text = "test";
    return (
        <ScrollView>
            <View style={{alignItems: 'center'}}>
            <View style={styles.container}>
            <Text style={styles.sectionheaders}>Add Description</Text>
            <TextInput style={styles.textfields}
                placeholder="Description"
            />

            <Text style={styles.sectionheaders}>Category</Text>
            <View style={styles.radiobutton}><Text>Football</Text><RadioButton
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
                color="#00274C"
            /></View>
            
            <View style={styles.radiobutton}><Text>Hockey</Text><RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
                color="#00274C"
            /></View>

            <View style={styles.radiobutton}><Text>Basketball</Text><RadioButton
                value="third"
                status={ checked === 'third' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('third')}
                color="#00274C"
            /></View>

            <Text style={styles.sectionheaders}>Price</Text>
            <TextInput 
                style={styles.textfields}
                keyboardType='numeric'
                onChangeText={(text)=> this.onChanged(text)}
                placeholder="$$"
                maxLength={10}
            />
            
            <View style={styles.buttonboi}><Button icon="card-plus" mode="contained" onPress={() => console.log('Pressed')} color="#FFCB05">
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
        alignItems: 'Left',
        justifyContent: 'center',
        width: '50%'
    },

    radiobutton: {
        flexDirection: 'row', 
        width: '100%', 
        height: 40,
        borderBottomWidth: 1,
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

    textfields: {
        height: 40, 
        width: '75%', 
        borderColor: '#00274C', 
        borderWidth: 1, 
        //backgroundColor: '#D3D3D3', 
        padding:4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
    },


    buttonboi: {
        margin: 8,
        marginRight: 50,
        marginLeft: 50
    }
});

export default NewListingScreen;