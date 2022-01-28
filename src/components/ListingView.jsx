import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { getListings } from '../api';
import { useContext} from 'react';
import ListingContext from '../contexts/ListingContext';
import ListingComponent from '../components/ListingComponent';

const ListingView = (props) => {

   console.log(props.details)
    return (
        <View style={styles.container}>
            
           <ListingComponent/>
           <ListingComponent/>
           <ListingComponent/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
        
        fontFamily: "Inter",

        //whenn actually looping through real results this will have to just affect the listigs not the titles
        flexDirection: 'row',
        justifyContent: 'flex-end',

        
        
    }
});


export default ListingView;