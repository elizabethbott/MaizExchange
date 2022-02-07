import React, { useEffect, useState, render, Component } from 'react';
import { StyleSheet, SafeAreaView,  FlatList, Text, View, Image, ScrollView} from 'react-native';

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

    // const list = () => {
        
    //     console.log(props)
    //     console.log(data)
    //     return 
        
      
    //   };

    const data = Array.from(props);
    return (
        <View style={styles.container}>

        {/* <ListingComponent {...props.list[0]}> </ListingComponent> */}


            <ScrollView>
                {/* {list()} */}
                {props.list.map((element) => {
                    return(
         
                        <View key={element.id} style={{margin: 10}}>
                        <ListingComponent {...element} ></ListingComponent>
                        </View>
                    )
            
            })}
            </ScrollView>
      
        
        
        
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


