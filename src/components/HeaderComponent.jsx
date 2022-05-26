import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const HeaderComponent = () => {
    return (
        <View style={styles.container}>
            <Icon
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                size={50}
            />
            <Text style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 24 }}>
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