import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EnIcon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './Button';
import Dropdown from './Dropdown';

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
            { label: "Mathematics", value: "math", icon: "calculator" },
            { label: "History", value: "history", icon: "book-open-page-variant" },
            { label: "Science", value: "science", icon: "flask" },
            { label: "Foreign Language", value: "language", icon: "earth" }
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

const ItemTypeSelector = ({ onSelect }) => {
    return (
        types.map((type, i) => (
            <Dropdown
                topBorder={i === 0}
                key={type.label}
                title={(
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <EnIcon name={type.icon} size={26} color="black" style={{ marginRight: 10 }} />
                        <Text style={{ fontSize: 18, paddingVertical: 10 }}>{type.label}</Text>
                    </View>
                )}
            >
                {type.options.map(cat => (
                    <View style={styles.buttonWrapper} key={cat.label}>
                        <Button
                            label={"  " + cat.label}
                            icon={<MCIcon name={cat.icon} size={18} color="white" />}
                            filled
                            bold
                            onPress={() => onSelect({ category: cat, type: type.value })}
                        />
                    </View>
                ))}
                <View style={{ width: '100%', height: 20 }} />
            </Dropdown>
        ))
    );
};

const styles = StyleSheet.create({
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

export default ItemTypeSelector;