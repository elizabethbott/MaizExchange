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
            {/* {user ? `Logged in as ${user.firstName} ${user.lastName}` :
                    "Log in with your UMich Google account:"} */}

            {/* <Text>
             {listing.length != 0 ? `${listing['listings'][0]['details']}` : "not yet" }
                </Text>    */}
            <ListingHeader category={listing.length != 0 ? `${listing['listings'][0]['category']}` : "not yet" } />
            
            {listing.length != 0 ? <ListingComponent details={listing['listings'][0]['details']} name={listing['listings'][0]['seller_id']} 
            price={listing['listings'][0]['price']} image={listing['listings'][0]['image_url_slug']}/> : null}
            
            
            
        </View>
    );
};

export default HomeScreen;