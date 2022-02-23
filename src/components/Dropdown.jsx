import React, { useState } from "react";
import {
    View,
    Text,
    LayoutAnimation,
    StyleSheet,
    UIManager,
    Platform
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Dropdown = ({ title, children, onToggle = () => false, topBorder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        onToggle(!isOpen);
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    return (
        <>
            {topBorder && (
                <View style={{ alignItems: 'center' }} ><View style={styles.divider} /></View>
            )}
            <TouchableOpacity onPress={toggleOpen} style={styles.heading} activeOpacity={0.6}>
                {typeof title === "string" ? (
                    <Text style={styles.title}>{title}</Text>
                ) : title}
                <Icon name={isOpen ? "chevron-up-outline" : "chevron-down-outline"} size={18} color="black" />
            </TouchableOpacity>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                {children}
            </View>
            <View style={{ alignItems: 'center' }} ><View style={styles.divider} /></View>
        </>
    );
};

const styles = StyleSheet.create({
    heading: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        paddingHorizontal: 20
    },
    hidden: {
        height: 0,
    },
    list: {
        overflow: 'hidden'
    },
    divider: {
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '100%',
    },
});

export default Dropdown;