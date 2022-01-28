import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import showLogin from '../components/showLogin';
import UserContext from '../contexts/UserContext';
import HeaderComponent from '../components/HeaderComponent';
import ListingComponent from '../components/ListingComponent';
import ListingView from '../components/ListingView';
import { useEffect, useState } from 'react';
import { getListings } from '../api';
import ListingHeader from '../components/ListingHeader';

//consider making a context with hard coded category values
//then loop through in the useEffect and add them to the corrersponding context
//then for each category send all the listings as an array to list view
const HomeScreen = () => {
    const [listing, setListing] = useState([]);
    useEffect(() => {
        console.log("in listing component")
        
        try{
            const temp = getListings();
            temp.then(value => {
                console.log('resolved!')
                console.log(value);
                setListing(value);

            });

            console.log(temp);
        } catch{
            console.log('errror :(');
        }
        
    }, []);


    if (listing.length != 0){
        console.log('listing recieved!');
        console.log(listing);
        console.log(listing['listings'][0])
    }




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           
            <HeaderComponent />
           
            <ListingHeader category={listing.length != 0 ? `${listing['listings'][0]['category']}` : "not yet" } />
{/*             
            {listing.length != 0 ? <ListingComponent details={listing['listings'][0]['details']} name={listing['listings'][0]['seller_id']} 
            price={listing['listings'][0]['price']} image={listing['listings'][0]['image_url_slug']}/> : null} */}

            {listing.length != 0 ? <ListingComponent {...listing['listings'][0]} /> : null}
            
            
            
        </View>
    );
};

export default HomeScreen;