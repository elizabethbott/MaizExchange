import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppStyle from '../AppStyle';

const styles = StyleSheet.create({
    baseButton: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: AppStyle.colors.blue,
        padding: 8
    },
    disabled: {
        backgroundColor: 'gray',
        borderColor: 'gray'
    },
    wide: {
        width: '100%'
    },
    text: {
        textAlign: 'center',
        color: AppStyle.colors.blue
    }
});

const Button = ({ label, icon, filled, wide, onPress, disabled, bold, color = "blue" }) => {
    const c = AppStyle.colors[color];

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.baseButton,
                { borderColor: c },
                filled && { backgroundColor: c },
                disabled && styles.disabled,
                wide && styles.wide
            ]}
            disabled={disabled}
        >
            <Text style={[
                styles.text,
                ((filled && color === "blue") || disabled) && { color: 'white' },
                bold && { fontWeight: "bold" }
            ]}>
                {icon ? icon : null}
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;