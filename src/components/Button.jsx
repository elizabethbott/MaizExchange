import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppStyle from '../AppStyle';

const styles = StyleSheet.create({
    baseButton: {
        borderWidth: 3,
        borderRadius: 8,
        borderColor: AppStyle.colors.blue,
        padding: 5
    },
    filled: {
        backgroundColor: AppStyle.colors.blue
    },
    disabled: {
        backgroundColor: 'gray',
        borderColor: 'gray'
    },
    text: {
        textAlign: 'center',
        color: AppStyle.colors.blue
    }
});

const Button = ({ label, filled, wide, onPress, disabled }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.baseButton, filled && styles.filled, disabled && styles.disabled]}
            disabled={disabled}
        >
            <Text style={[styles.text, (filled || disabled) && { color: 'white' }]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;