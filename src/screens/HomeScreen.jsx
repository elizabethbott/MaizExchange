import React, { useContext } from 'react';
import { Text, View, Image , ScrollView} from 'react-native';
import showLogin from '../components/showLogin';
import UserContext from '../contexts/UserContext';
import HeaderComponent from '../components/HeaderComponent';
import ListingComponent from '../components/ListingComponent';
import ListingView from '../components/ListingView';
import { useEffect, useState } from 'react';
import { getListings } from '../api';
import ListingHeader from '../components/ListingHeader';


const HomeScreen = () => {
    const [listing, setListing] = useState();
    const [tickets, setTickets] = useState([]);
    const [textbooks, setTextBooks] = useState([]);
    const [other, setOther] = useState([]);
    useEffect(() => {

        
        try{
            const temp = getListings();
            temp.then(value => {
                console.log('resolved!')
                console.log(value['listings'].length);
                setListing(value['listings']);
                for (let i  = 0; i < value['listings'].length; i++){
                    if (value['listings'][i]['type'] === "ticket"){
                        setTickets((tickets) => [...tickets, value['listings'][i]])
                        //console.log(value['listings'][i]);
                       
                    } if (value['listings'][i]['type'] === "textbook"){
                        setTextBooks((textbooks) => [...textbooks, value['listings'][i]])
                        //console.log(value['listings'][i]);
                       
                    }
                    if (value['listings'][i]['type'] === "other"){
                        setOther((other) => [...other, value['listings'][i]])
                        //console.log(value['listings'][i]);
                       
                    }
                    
                }
                

            });

        } catch{
            console.log('errror :(');
        }
        
    }, []);


    if (listing){
        console.log('listing recieved!');
        
    }
    if (tickets){
        console.log(tickets)
        console.log(tickets.length)
    }




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView>
           
            <HeaderComponent />
            <View >
            
                <ListingHeader category={tickets.length != 0 ? `${tickets[0]['type']}` : "" } /> 
                 {tickets.length  ? <ListingView list={{...tickets}}/> : null}

                 <ListingHeader category={textbooks.length != 0 ? `${textbooks[0]['type']}` : "" } /> 
                 {textbooks.length ? <ListingView list={{...textbooks}}/> : null}

                 <ListingHeader category={other.length != 0 ? `${other[0]['type']}` : "" } /> 
                 {other.length  ? <ListingView list={{...other}}/> : null}


               
            </View>
           
            
            </ScrollView>
        </View>
    );
};

export default HomeScreen;