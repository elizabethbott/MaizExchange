import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import AppStyle from '../AppStyle';
import ItemTypeSelector from '../components/ItemTypeSelector';

const SearchScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Text style={[AppStyle.classes.header, { marginHorizontal: 10, marginVertical: 20 }]}>
                What are you looking to buy?
            </Text>

            <Text style={styles.sectionheaders}>Type</Text>
            <ItemTypeSelector onSelect={({ category, type }) =>
                navigation.navigate("Search Results", { category: category.value, type })
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

export default SearchScreen;