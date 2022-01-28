import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppStyle from '../AppStyle';

const styles = StyleSheet.create({
    baseButton: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: AppStyle.colors.blue,
        padding: 10
    },
    filled: {
        backgroundColor: AppStyle.colors.blue
    },
    text: {
        textAlign: 'center'
    }
});

const Button = ({ label, filled, wide, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.baseButton, filled && styles.filled]}>
            <Text styles={[styles.text, { color: 'white' }]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;