import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, StyleSheet } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMap from '../util/icons';
import { getConversations } from '../api';
import { useFocusEffect } from '@react-navigation/native';


const ConversationButton = ({ firstName, lastName, latestMsg, latestTimestamp, title, category, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonRoot} onPress={onPress}>
            <MCIcon name={IconMap[category]} size={50} color="black" style={{ marginRight: 10 }} />
            <View style={{ flex: 1 }}>
                <Text numberOfLines={1}><Text style={{ fontWeight: "bold" }}>{firstName} {lastName}</Text> - {title}</Text>
                <Text numberOfLines={1} style={{ color: 'gray' }}>{latestMsg}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={20} color="black" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
    );
};

const NotificationsScreen = ({ navigation }) => {
    const [conversations, setConversations] = useState([]);

    // const { user } = useContext(UserContext);

    const fetchConversations = async () => {
        const result = await getConversations();
        setConversations(result.conversations);
    };

    useFocusEffect(
        useCallback(() => {
            fetchConversations();
        }, [])
    );

    return (
        <ScrollView>
            {conversations.map(conversation => (
                <ConversationButton
                    title={conversation.listingInfo.title}
                    firstName={conversation.userInfo.first_name}
                    lastName={conversation.userInfo.last_name}
                    latestMsg={conversation.latestMsg}
                    latestTimestamp={conversation.latestTimestamp}
                    category={conversation.listingInfo.category}
                    onPress={() => navigation.navigate("Chat Screen", {
                        listingId: conversation.listingInfo.id,
                        otherId: conversation.userInfo.id,
                        amIBuyer: conversation.amIBuyer,
                        title: conversation.listingInfo.title,
                        firstName: conversation.userInfo.first_name,
                        lastName: conversation.userInfo.last_name,
                    })}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonRoot: {
        width: '100%',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        height: 80
    }
});

export default NotificationsScreen;