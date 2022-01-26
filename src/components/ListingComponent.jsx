import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { testApi } from '../api';

const ListingComponent = () => {
  
    return (
        <View style={styles.container}>
            <Image style={{width: 111, height:110 }}source={require('../../assets/hockey.png')} />
            <Text> Penn State</Text>
            <Text> by HollyS</Text>
            <Text style={{fontWeight: 600}}> $20</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
        alignContent: "center",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 400
        
    },
});


export default ListingComponent;