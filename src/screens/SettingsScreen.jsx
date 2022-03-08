import React, { useContext } from 'react'
import { StyleSheet, Text, View} from 'react-native';
import ExampleComponent from '../components/ExampleComponent';
import UserContext from '../contexts/UserContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
    const { user } = useContext(UserContext);
    
    return (
        <View style={styles.container}>
            {/* <Text>Example screen for profile - hello world!</Text> */}
            {/* <ExampleComponent /> */}
            <br></br>
            <Icon name={`person-circle`} size={200} color={'#0000FF'} />
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