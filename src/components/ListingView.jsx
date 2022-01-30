import React, { useEffect, useState, render } from 'react';
import { StyleSheet, SafeAreaView,  FlatList, Text, View, Image} from 'react-native';

import ListingComponent from '../components/ListingComponent';




const ListingView = (props) => {

   

//    const listing = temp;
      
    
   // const [listing, setListing] = useState([]);
    useEffect(() => {
        
        
        // var i = 0;
        // while (props[i]){
        //     console.log(props[i])
        //     //const temp = <ListingComponent {...props[i]} />
        //    // console.log(temp)
        //     const data = listing;
        //     const temp = props[i]
        //     data.push(temp);
        //     setListing(data);
        //     i += 1;  
            
        // };
        // console.log(listing);
        // console.log(listing[0].details)
    }, []);
    
    
    const ItemList = ({item}) => (

        <View>
            <ListingComponent {...item} />
        </View>
    );

   
    return (
        <View style={styles.container}>

        <ListingComponent {...props.list[0]}> </ListingComponent>

        {/* <FlatList
            data={props.list}
            renderItem={({item}) => <ItemList name={item} />}
        /> 
        
        need to figure out this stupid flat list shit, rn tis hardcoded*/}
        
        
      
        
        
        
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


