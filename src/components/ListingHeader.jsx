import { Text } from 'react-native';

const ListingHeader = (props) => {
    return (
        <Text style={{
            fontSize: 24,
            fontWeight: "600", paddingBottom: 30, textAlign: 'left'
        }}>
            {props.category}
        </Text>
    );
};

export default ListingHeader;