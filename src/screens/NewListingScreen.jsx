import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import EnIcon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStyle from '../AppStyle';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

const types = [
    {
        label: "Ticket", value: "ticket", icon: "ticket", options: [
            { label: "Football", value: "football", icon: "football" },
            { label: "Basketball", value: "basketball", icon: "basketball" },
            { label: "Hockey", value: "hockey", icon: "hockey-puck" }
        ]
    },
    {
        label: "Textbook", value: "textbook", icon: "book", options: [
            { label: "Mathematics", value: "math", icon: "book-open-page-variant" },
            { label: "History", value: "history", icon: "book-open-page-variant" },
            { label: "Science", value: "science", icon: "book-open-page-variant" },
            { label: "Foreign Language", value: "language", icon: "book-open-page-variant" }
        ]
    },
    {
        label: "Other/Misc.", value: "other", icon: "box", options: [
            { label: "Sublease", value: "sublease", icon: "file-document-outline" },
            { label: "Parking Spot", value: "parking", icon: "car" },
            { label: "Electronics", value: "electronics", icon: "laptop" },
            { label: "Other Object", value: "object", icon: "cube-outline" }
        ]
    }
];

const NewListingScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Text style={[AppStyle.classes.header, { marginHorizontal: 10, marginVertical: 20 }]}>
                What would you like to sell?
            </Text>

            <Text style={styles.sectionheaders}>Type</Text>
            {
                types.map((type, i) => (
                    <Dropdown
                        topBorder={i === 0}
                        title={(
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <EnIcon name={type.icon} size={26} color="black" style={{ marginRight: 10 }} />
                                <Text style={{ fontSize: 18, paddingVertical: 10 }}>{type.label}</Text>
                            </View>
                        )}
                    >
                        {type.options.map(cat => (
                            <View style={styles.buttonWrapper}>
                                <Button
                                    label={"  " + cat.label}
                                    icon={<MCIcon name={cat.icon} size={18} color="white" />}
                                    filled
                                    bold
                                    onPress={() =>
                                        navigation.navigate("Listing Form", { category: cat.value, type: type.value })
                                    }
                                />
                            </View>
                        ))}
                        <View style={{ width: '100%', height: 20 }} />
                    </Dropdown>
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    sectionheaders: {
        fontSize: 12,
        fontWeight: "900",
        marginTop: 16,
        marginBottom: 4,
        marginLeft: 8,
    },
    textfields: {
        height: 40,
        width: '75%',
        borderColor: '#00274C',
        borderWidth: 1,
        //backgroundColor: '#D3D3D3', 
        padding: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        marginLeft: 8,
    },
    buttonWrapper: {
        width: '50%',
        marginVertical: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export default NewListingScreen;