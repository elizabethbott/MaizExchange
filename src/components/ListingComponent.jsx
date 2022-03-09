import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getUser } from '../api';

const ListingComponent = (props) => {
    // const [user, setUser] = useState([]);

    // useEffect(() => {
    //     try {
    //         const temp = getUser(props.seller_id);
    //         temp.then(value => {
    //             setUser(value);
    //         });
    //     } catch {
    //         console.log('errror :(');
    //     }
    // }, []);

    return (
        <View style={styles.container}>
            {/* will have to change when i figure out where we will be storing our images */}
            {/* {props.image_url_slug != "" ? <Image style={{ width: 111, height: 110 }} source={require(`../../assets/${props.image_url_slug}`)}/> : null}  */}
            <Text> {props.details}</Text>
            <Text>
               {props.first_name} {props.last_name}

            </Text>
            <Text style={{ fontWeight: 600 }}> {props.price} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
        alignContent: "center",
        fontSize: 14,
        fontWeight: "400",
        padding: 15

    },
});

export default ListingComponent;