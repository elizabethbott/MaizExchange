import React from 'react'
import { Platform, KeyboardAvoidingView } from 'react-native';

const KeyboardDodger = ({ children }) => (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={96}
    >
        {children}
    </KeyboardAvoidingView>
);

export default KeyboardDodger;