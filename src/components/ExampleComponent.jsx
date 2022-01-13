import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ExampleComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Example custom component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
});

export default ExampleComponent;