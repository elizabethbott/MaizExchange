import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { testApi } from '../api';
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

const HeaderComponent = () => {
   
    return (
        <View style={styles.container}>
           <Icon
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                size={50}
            />
            <Text style={{fontFamily: "Inter", fontWeight: 500, fontSize: 24}}>
                MaizExchange
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 30,
    },
});

export default HeaderComponent;