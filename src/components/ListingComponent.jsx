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
            const temp = getUser(props.id);
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
    if (user.length != 0){
        console.log(user);
        console.log(user['user'][0]['first_name']);
    }

   
    return (
        <View style={styles.container}>
            {/* will have to change when i figure out where we will be storing our images */}
            <Image style={{width: 111, height:110 }}source={require(`../../assets/${props.image_url_slug}`)} />
            <Text> {props.details}</Text>
            <Text> 
                {user.length != 0? `${user['user'][0]['first_name']} ${user['user'][0]['last_name']}` : ""}

                </Text>
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