import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import ListingComponent from '../components/ListingComponent';

const ListingView = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {props.list.map((element) => {
                    return (
                        <View key={element.id} style={{ margin: 10 }}>
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
        //whenn actually looping through real results this will have to just affect the listigs not the titles
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

export default ListingView;