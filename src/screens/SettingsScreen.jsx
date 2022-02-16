import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ExampleComponent from '../components/ExampleComponent';
import UserContext from '../contexts/UserContext';
import userlogo from '../images/userlogo.png';

const SettingsScreen = () => {
    const { user } = useContext(UserContext);
    
    return (
        <View style={styles.container}>
            <Text>Example screen for profile - hello world!</Text>
            <ExampleComponent />
            <br></br>
            <img style={{width: '100px', height: '100px',}} src={userlogo} alt="this is user image" />
            <Text style={styles.sectionheaders}>{user.firstName} {user.lastName}</Text>
            <Text style={styles.sectionheaders}>Contact: {user.email}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionheaders: {
        fontSize: 12,
        fontWeight: "900",
        marginTop: 16,
        marginBottom: 4
    },

});

export default SettingsScreen;