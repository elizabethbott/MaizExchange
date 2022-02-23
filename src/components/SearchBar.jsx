import React, { useState } from 'react';
import { LayoutAnimation, Platform, StyleSheet, Text, TextInput, TouchableOpacity, UIManager, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStyle from '../AppStyle';
import Button from './Button';
import PriceInput from './PriceInput';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SearchBar = ({ sort, setSort, maxPrice, setMaxPrice, searchInput, setSearchInput }) => {
    const [filtersExpanded, setFiltersExpanded] = useState(false);

    const toggleExpanded = () => {
        setFiltersExpanded(f => !f);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    return (
        <View style={{ marginBottom: 10 }}>
            <View style={{ backgroundColor: '#d6d6d6', flexDirection: 'row' }}>
                <View style={styles.searchBarContainer}>
                    <Icon name="search" color="black" size={20} />
                    <TextInput
                        value={searchInput}
                        onChangeText={setSearchInput}
                        style={styles.searchBarInput}
                        placeholder="Search by name..."
                        returnKeyType="search"
                    />
                </View>
                <TouchableOpacity style={[styles.filterButton, filtersExpanded && styles.selectedFilterButton]} onPress={toggleExpanded}>
                    <MCIcon name={`filter-menu${filtersExpanded ? '' : '-outline'}`} size={30} color={filtersExpanded ? 'white' : 'black'} />
                </TouchableOpacity>
            </View>
            <View style={[styles.filterPanel, !filtersExpanded && styles.hidden]}>
                <Text style={styles.filterPanelHeading}>Filter Settings</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.settingsColumn}>
                        <Text style={styles.controlLabel}>Order by:</Text>
                        <Text style={{ color: 'white' }}>
                            <Text onPress={() => setSort("recent")} style={sort === 'recent' && styles.selectedText}>Recent</Text>
                            {" "}|{" "}
                            <Text onPress={() => setSort("price")} style={sort === 'price' && styles.selectedText}>Price</Text>
                        </Text>
                    </View>
                    <View style={styles.settingsColumn}>
                        <Text style={styles.controlLabel}>Max price:</Text>
                        <PriceInput price={maxPrice} setPrice={setMaxPrice} style={{ borderColor: 'white', color: 'white' }} />
                    </View>
                </View>
                <View style={styles.confirmButtonWrapper}>
                    <Button label="Confirm" color="maize" filled onPress={toggleExpanded} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    searchBarInput: {
        flex: 1,
        paddingVertical: 7,
        marginLeft: 5
    },
    filterButton: {
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 12
    },
    selectedFilterButton: {
        backgroundColor: AppStyle.colors.blue,
        borderColor: AppStyle.colors.blue
    },
    filterPanel: {
        backgroundColor: AppStyle.colors.blue,
        padding: 15,
        overflow: "hidden"
    },
    filterPanelHeading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10
    },
    settingsColumn: {
        width: '49%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlLabel: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 5
    },
    selectedText: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: AppStyle.colors.maize
    },
    confirmButtonWrapper: {
        marginHorizontal: 25,
        marginTop: 15
    },
    hidden: {
        height: 0,
        padding: 0
    }
});

export default SearchBar;