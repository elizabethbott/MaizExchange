import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { testApi } from '../api';
import ListingComponent from '../components/ListingComponent';

const ListingView = () => {
  
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24,
        fontWeight: 600}}>Hockey Tickets</Text>
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