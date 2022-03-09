import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import AppStyle from '../AppStyle';
import ItemTypeSelector from '../components/ItemTypeSelector';

const NewListingScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Text style={[AppStyle.classes.header, { marginHorizontal: 10, marginVertical: 20 }]}>
                What would you like to sell?
            </Text>

            <Text style={styles.sectionheaders}>Type</Text>
            <ItemTypeSelector onSelect={({ category, type }) =>
                navigation.navigate("Listing Form", { category, type })
            } />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    sectionheaders: {
        fontSize: 12,
        fontWeight: "900",
        marginTop: 16,
        marginBottom: 4,
        marginLeft: 8,
    }
});

export default NewListingScreen;