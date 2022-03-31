import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const PriceInput = ({ price, setPrice, style: customStyle }) => {
    const processPriceInput = p => {
        p = p.replace("$", "").replace(" ", "");
        if (p > 1000) {
            p = 1000;
        } else if (p < 0) {
            p = 0;
        }
        setPrice(p);
    };

    const onPriceBlur = () => {
        const roundedPrice = parseFloat(price).toFixed(2);
        if (roundedPrice === "NaN") {
            setPrice("");
            return "";
        }
        setPrice(roundedPrice);
        return roundedPrice;
    };

    return (
        <TextInput
            style={[styles.textfield, customStyle]}
            value={"$ " + price}
            keyboardType='numeric'
            onChangeText={processPriceInput}
            onBlur={onPriceBlur}
            maxLength={8}
        />
    );
};

const styles = StyleSheet.create({
    textfield: {
        height: 40,
        width: 100,
        borderColor: '#00274C',
        borderWidth: 1,
        padding: 4,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        marginLeft: 8,
    }
});

export default PriceInput;