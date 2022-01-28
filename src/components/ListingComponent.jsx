import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ListingView from '../components/ListingView';
import { getListings, getUser } from '../api';

import { useEffect, useState } from 'react';

const ListingComponent = (props) => {

    const [user, setUser] = useState([]);
    useEffect(() => {
        console.log("in listing component")
        
        try{
            const temp = getUser(props.name);
            temp.then(value => {
                console.log('userr resolved!')
                console.log(value);
                setUser(value);

            });

            console.log(temp);
        } catch{
            console.log('errror :(');
        }
        
    }, []);

   
    return (
        <View style={styles.container}>
            {/* <Image style={{width: 111, height:110 }}source={require(`{props.image}`)} /> */}
            <Text> {props.details}</Text>
            <Text> {props.name}</Text>
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