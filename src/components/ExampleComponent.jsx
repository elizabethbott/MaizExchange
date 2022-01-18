import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { testApi } from '../api';

const ExampleComponent = () => {
    useLayoutEffect(() => {
        testApi();
    }, []);

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