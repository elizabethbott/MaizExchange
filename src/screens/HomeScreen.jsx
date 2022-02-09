import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import ListingView from '../components/ListingView';
import ListingHeader from '../components/ListingHeader';
import { getListings } from '../api';

const HomeScreen = () => {
    const [tickets, setTickets] = useState([]);
    const [textbooks, setTextBooks] = useState([]);
    const [other, setOther] = useState([]);

    useEffect(() => {
        try {
            const temp = getListings();
            temp.then(value => {
                for (let i = 0; i < value['listings'].length; i++) {
                    if (value['listings'][i]['type'] === "ticket") {
                        setTickets((tickets) => [...tickets, value['listings'][i]])
                    } if (value['listings'][i]['type'] === "textbook") {
                        setTextBooks((textbooks) => [...textbooks, value['listings'][i]])
                    }
                    if (value['listings'][i]['type'] === "other") {
                        setOther((other) => [...other, value['listings'][i]])
                    }
                }
            });
        } catch {
            console.log('errror :(');
        }
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView>
                <HeaderComponent />
                <View >

                    <ListingHeader category={tickets.length != 0 ? `${tickets[0]['type']}` : ""} />
                    {tickets.length != 0 ? <ListingView list={tickets} /> : null}

                    <ListingHeader category={textbooks.length != 0 ? `${textbooks[0]['type']}` : ""} />
                    {textbooks.length != 0 ? <ListingView list={textbooks} /> : null}

                    <ListingHeader category={other.length != 0 ? `${other[0]['type']}` : ""} />
                    {other.length != 0 ? <ListingView list={other} /> : null}

                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;