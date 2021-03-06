import { StyleSheet } from 'react-native';

const maize = "#FFCB05";
const blue = "#00274C";

const classes = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: blue
    }
});

const AppStyle = {
    classes,
    colors: {
        maize,
        blue
    }
};
export default AppStyle;

