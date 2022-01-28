import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";
import LogInOrOutButton from '../components/LogInOrOutButton';

const showLogin = () => {
    const { user } = useContext(UserContext);
    // if (user){
    //     return null;
    // }
    return (
        <View style={styles.container}>
          
        </View>
    );
}
export default showLogin;