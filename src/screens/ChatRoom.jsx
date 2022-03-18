import React, { useState, useEffect, useContext, useCallback, useRef } from 'react';
import { StyleSheet, FlatList, Text, TextInput, Platform, View, TouchableOpacity, Keyboard, Image, ActivityIndicator, Dimensions, Animated } from 'react-native';
// import * as Notifications from 'expo-notifications';
// import hitAPI, { getStandardTimeString, openCamera, pickImage } from "utility/Utils";
// import { UserContext } from "utility/PartsContext";
// import SafeAreaView from 'react-native-safe-area-view';
// import { NonBlockingLoader } from 'components/Loaders';
import { useFocusEffect } from '@react-navigation/native';
import UserContext from '../contexts/UserContext';
import AppStyle from '../AppStyle';
import KeyboardDodger from '../components/KeyboardDodger';
// import ScaledImage from "components/ScaledImage";
// import RealKAV from 'components/RealKeyboardAvoidingView';
// import { HeaderBackButton } from '@react-navigation/stack';
// import { SERVER_PATH } from '../../GlobalConfig';
// import ErrorNotifier from 'components/ErrorNotifier';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    messageContainer: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "flex-start",
        maxWidth: "75%",
        flexDirection: "row",
    },
    personIcon: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: "#BBB",
        marginLeft: 4,
        marginRight: 4,
    },
    personIconText: {
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: "auto",
        color: "#EEE",
        fontSize: 18,
        fontWeight: "bold",
    },
    bubble: {
        backgroundColor: "#DDD",
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        maxWidth: "100%"
    },
    author: {
        color: "#888",
        fontSize: 11
    },
    myMessageContainer: {
        alignSelf: "flex-end",
    },
    myBubble: {
        backgroundColor: AppStyle.colors.blue,
        marginRight: 4,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 15,
    },
    myMessage: {
        color: "white",
    },
    myAuthor: {
        color: "#DDD",
    },
    announce: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 26,
        marginBottom: 14,
    },
    announceText: {
        textAlign: "center",
        alignSelf: "center",
        maxWidth: "80%",
        fontSize: 13,
        fontWeight: "bold",
        color: "#666",
    },
    announceAuthor: {
        textAlign: "center",
        alignSelf: "center",
        color: "#666",
        fontSize: 12,
        marginBottom: 4,
    },
    typeBoxContainer: {
        flexDirection: "row",
        width: "100%",
    },
    typeBox: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#CCC",
        margin: 6,
        flex: 1,
        flexGrow: 1,
    },
    sendButton: {
        width: 35,
        height: 35,
        backgroundColor: AppStyle.colors.blue,
        borderRadius: 40,
        marginRight: 6,
        marginTop: "auto",
        marginBottom: "auto",
    },
    imageButton: {
        width: 35,
        height: 35,
        backgroundColor: "#CCC",
        borderRadius: 40,
        marginRight: 6,
        marginTop: "auto",
        marginBottom: "auto",
    },
    sendArrow: {
        marginTop: "auto",
        marginBottom: "auto",
        alignSelf: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 23,
        marginLeft: 1,
    },
    imageIcon: {
        marginTop: "auto",
        marginBottom: "auto",
        alignSelf: "center",
        width: 23,
        height: 23,
        resizeMode: "contain"
    },
    hide: {
        display: "none",
    },
    issueIcon: {
        width: 70,
        height: 70,
        position: "absolute",
        top: -15,
        left: "50%",
        transform: [
            { translateX: -75 }
        ],
        right: 0,
        tintColor: "#DDD",
        resizeMode: "contain",
        zIndex: -1
    }
});

const Config = {
    BEGINNING_MSG: "This is the beginning of the chat history.",
    MAX_CHATS_PER_BATCH: 15,    // Max chats to be retrieved per fetch. This must match the server's batch size!!
    DEFAULT_REFRESH_INTERVAL: 10000,    // Milliseconds to wait before fetching chat updates at the fastest interval
    MEDIUM_REFRESH_INTERVAL: 25000,   // Milliseconds to wait before fetching chat updates at a medium pace
    LONG_REFRESH_INTERVAL: 60000,   // Milliseconds to wait before fetching chat updates at a slow rate
    MEDIUM_REFRESH_THRESHOLD: 5,    // How many minutes old the last chat should be before using the medium interval
    LONG_REFRESH_THRESHOLD: 30,   // How many minutes old the last chat should be before using the long interval
    CHAT_IMAGE_PREFIX: "_IMG_"
};

// FOR TESTING ONLY
const hitAPI = async (endpoint, body, resolve, reject) => {
    await new Promise(r => setTimeout(r, 1000));
    if (endpoint === "getChats") {
        if (body.before || body.after) resolve([]);
        resolve([
            { ID: 6, author: "Joel", lastName: "Rummel", message: "Not much, how you doin? Can I buy my ticket yet or nah", timestamp: new Date().getTime() / 1000 },
            { ID: 5, author: "Aidan", lastName: "Haase", message: "Hey joel whats up", timestamp: (new Date().getTime() / 1000) - 1000 }
        ]);
    }
};
const ScaledImage = () => <></>;
const NonBlockingLoader = () => <View style={{ flex: 1 }}><Text>Loading...</Text></View>;
const ErrorNotifier = ({ msg }) => <Text>{msg ? `Oopsie: ${msg}` : ""}</Text>;

function ChatMsg(props) {
    const { user } = useContext(UserContext);

    const isMe = user.firstName == props.author && user.lastName == props.authorLastName;
    let dateStr = "";
    if (props.timestamp) {
        const d = new Date(props.timestamp * 1000);
        //if (new Date().toDateString() == d.toDateString())
        // dateStr = getStandardTimeString(d);
        //else
        dateStr = d.toLocaleDateString();
    }

    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 750,
            useNativeDriver: true
        }).start();
    }, []);

    return props.isIssue ? (
        <View style={styles.announce}>
            <Text style={styles.announceText}>{props.message}</Text>
        </View>
    ) : (
        <Animated.View style={[styles.messageContainer, !isMe ? {} : styles.myMessageContainer, { opacity: fadeAnim }]}>
            <View style={[styles.personIcon, !isMe ? {} : styles.hide]}>
                <Text style={styles.personIconText}>{props.author[0].toUpperCase()}{props.authorLastName[0].toUpperCase()}</Text>
            </View>
            <View style={[styles.bubble, !isMe ? {} : styles.myBubble, props.message.startsWith(Config.CHAT_IMAGE_PREFIX) ? { /**/ } : {}]}>
                <Text style={[styles.author, !isMe ? {} : styles.myAuthor]}>{isMe ? "You" : props.author + " " + props.authorLastName} • {dateStr}</Text>
                {props.message.startsWith(Config.CHAT_IMAGE_PREFIX) ?
                    <ScaledImage uri={SERVER_PATH + props.message.replace(Config.CHAT_IMAGE_PREFIX, "")} maxWidth={(props.windowWidth - 64) / 1.2} /> :
                    <Text style={[!isMe ? {} : styles.myMessage]}>{props.message}</Text>
                }
            </View>
        </Animated.View>
    );
}

function ChatInput({ onChatSucceed, onChatFailed, onChatSubmit, truckID }) {
    const [text, setText] = useState("");
    const [enabled, setEnabled] = useState(true);
    const [textHeight, setTextHeight] = useState(0);
    const [image, setImage] = useState("");
    const { user } = useContext(UserContext);

    function submitChat() {
        if (text.length === 0 && !image) return;
        onChatSubmit();
        let tempText = text;
        let tempImage = image;
        setText("");
        setImage("");
        setEnabled(false);
        // Disable the text field until we get a response back
        hitAPI("submitChat", { truckID: truckID, token: user.userToken, message: tempText, image: tempImage }, ({ chatID, message }) => {
            onChatSucceed(message, chatID);
            setEnabled(true);
        }, () => {
            setEnabled(true);
            setText(tempText);
            setImage(tempImage);
            onChatFailed();
        });
    }

    return (
        <View style={styles.typeBoxContainer}>
            {(!enabled) &&
                <View style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.18)",
                    zIndex: 1
                }}>
                    <ActivityIndicator style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: [
                            { translateY: -10 }
                        ],
                        zIndex: 2
                    }}
                    />
                </View>
            }
            <View style={{ width: 10 }} />
            {Platform.OS != "web" &&
                <TouchableOpacity style={styles.imageButton} onPress={() => {
                    Keyboard.dismiss();
                    setTimeout(() => openCamera(i => { setImage(i); setText(""); }), 100);
                }}>
                    <Image style={styles.imageIcon} source={require("../../assets/camera.png")} />
                </TouchableOpacity>
            }
            <TouchableOpacity style={styles.imageButton} onPress={() => {
                Keyboard.dismiss();
                setTimeout(() => pickImage(i => { setImage(i); setText(""); }), 100);
            }}>
                <Image style={styles.imageIcon} source={require("../../assets/picture.png")} />
            </TouchableOpacity>
            <TextInput
                style={[styles.typeBox, { minHeight: Platform.OS === "ios" ? 31 : 36, height: textHeight + 0 }]}
                onContentSizeChange={e => setTextHeight(Math.min(250, e.nativeEvent.contentSize.height))}
                onChangeText={t => {
                    if (image) {
                        setText("");
                        setImage("");
                    } else setText(t);
                }}
                editable={enabled}
                placeholder={"Send a message..."}
                placeholderTextColor={"#888"}
                multiline
                blurOnSubmit
                enablesReturnKeyAutomatically
                returnKeyType={"send"}
                onSubmitEditing={submitChat}
                value={image ? "<1 image>" : text}
            />
            <TouchableOpacity style={styles.sendButton} onPress={submitChat}>
                <Text style={styles.sendArrow}>↑</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function ChatRoom({ navigation, route }) {
    const truckID = 0; // route.params.truckID;
    const { user } = useContext(UserContext);
    const [chats, setChats] = useState(0);
    const [latestChatID, setLatestChatID] = useState(-1);
    const [canGetMoreChats, setCanGetMoreChats] = useState(true);
    const [windowWidth, setWindowWidth] = useState(0);
    const [chatWindowRefreshTimer, setRefreshTimer] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");

    const lciRef = useRef(latestChatID);
    lciRef.current = latestChatID; // i still hate closures

    const finalWidth = (windowWidth || Dimensions.get("window").width);

    const timerRef = useRef(chatWindowRefreshTimer);
    timerRef.current = chatWindowRefreshTimer;

    const chatsRef = useRef(chats);
    chatsRef.current = chats;

    useEffect(() => {
        // Assume that we are in an alternate chat window
        navigation.setOptions({
            title: "Hello i am title",
            headerStyle: { backgroundColor: AppStyle.colors.blue },
            headerTitleStyle: { color: "white" },
            headerBackTitleStyle: { color: "white" }
        });
    });

    const resetPollTimer = (lastTimestamp = 0) => {
        let millisecs = Config.DEFAULT_REFRESH_INTERVAL;
        if (lastTimestamp > 0) {
            // Use intelligent refresh interval
            const minutesDiff = (new Date().getTime() - (lastTimestamp * 1000)) / (1000 * 60);
            if (minutesDiff > Config.LONG_REFRESH_THRESHOLD)
                millisecs = Config.LONG_REFRESH_INTERVAL;
            else if (minutesDiff > Config.MEDIUM_REFRESH_THRESHOLD)
                millisecs = Config.MEDIUM_REFRESH_INTERVAL;
        }

        setRefreshTimer(current => {
            clearTimeout(current);
            return setTimeout(slowPoll, millisecs);
        });
    }

    const slowPoll = () => {
        setErrorMsg("");
        hitAPI("getChats", { token: user.userToken, truckID: truckID, after: lciRef.current }, data => {
            if (data.length == 0) { resetPollTimer(chatsRef.current[0].timestamp); return; }
            setChats(oldChats => {
                if (oldChats !== 0) data = data.filter(c => {
                    let good = true;
                    oldChats.forEach(chat => {
                        if (chat.ID == c.ID) {
                            good = false; // break
                        }
                    });
                    return good;
                });
                if (data.length == 0) { // This should never happen anymore. There'll always at least be a "beginning" chat header
                    resetPollTimer();
                    return oldChats === 0 ? [] : oldChats;
                }
                let updatedChats = [...data, ...oldChats]
                updatedChats.sort((a, b) => b.ID - a.ID);
                updatedChats = insertDateHeaders(updatedChats);
                setLatestChatID(data[0].ID);
                if (!data[0].timestamp) resetPollTimer();
                else resetPollTimer(data[0].timestamp);
                return updatedChats;
            });
        }, () => {
            setErrorMsg("Internet connection lost, retrying...");
            resetPollTimer();
        });
    }

    function insertDateHeaders(c) {
        // [ newest ... oldest ]
        if (c.length < 2) return c;
        let currentDate = new Date(c[0].timestamp * 1000).toDateString();
        for (let i = 0; i < c.length; i++) {
            if (!c[i].timestamp && i != c.length - 1) continue;
            const newDate = new Date(c[i].timestamp * 1000).toDateString();
            if (newDate != currentDate || c[i].message == Config.BEGINNING_MSG) {
                if (c[i - 1].ID != c[i].ID + 0.5)
                    c.splice(i, 0, { ID: c[i].ID + 0.5, author: "", authorLastName: "", isIssue: true, message: currentDate });
                currentDate = newDate;
            }
        }
        return c;
    }

    useFocusEffect(useCallback(() => {
        if (chats !== 0) return;
        setErrorMsg("");
        hitAPI("getChats", { token: user.userToken, truckID: truckID }, data => {
            if (data.length < Config.MAX_CHATS_PER_BATCH) {
                setCanGetMoreChats(false);
                data.push({ ID: 0, author: "", authorLastName: "", isIssue: true, message: Config.BEGINNING_MSG })
            }
            data = insertDateHeaders(data);
            setChats([...data]);
            if (data.length > 0) { // should never be false anymore
                setLatestChatID(data[0].ID);
                if (data[0].timestamp) resetPollTimer(data[0].timestamp);
                else resetPollTimer();
            }
        }, () => {
            setErrorMsg("Internet connection lost, retrying...");
            resetPollTimer();
        })
        return () => clearTimeout(timerRef.current);
    }, []));

    /*useFocusEffect(useCallback(() => {
        const subscription = Notifications.addNotificationReceivedListener(notification => {
            if (route.params.name == notification.request.content.title) {
                clearTimeout(timerRef.current);
                slowPoll();
            }
        });
        return () => subscription.remove();
    }, []));*/

    useEffect(() => () => {
        // unmount
        clearTimeout(timerRef.current);
    }, []);

    return (
        <KeyboardDodger>
            <View style={styles.container} onLayout={e => setWindowWidth(e.nativeEvent.layout.width)}>
                <ErrorNotifier visible={errorMsg.length > 0} turnInvisible={() => setErrorMsg("")} msg={errorMsg} />
                {chats === 0 ? <NonBlockingLoader /> :
                    <FlatList
                        onEndReached={() => {
                            if (!canGetMoreChats) return;
                            if (chats.length < Config.MAX_CHATS_PER_BATCH) return;
                            if (chats === 0) return;
                            setErrorMsg("");
                            hitAPI("getChats", { token: user.userToken, truckID: truckID, before: chats[chats.length - 1].ID }, data => {
                                if (data.length < Config.MAX_CHATS_PER_BATCH) {
                                    setCanGetMoreChats(false);
                                    data.push({ ID: 0, author: "", authorLastName: "", isIssue: true, message: "This is the beginning of the chat history." })
                                }
                                setChats(oldChats => {
                                    for (var i = 0; i < oldChats.length; i++)
                                        if (oldChats[i].ID == data[0].ID) return oldChats;
                                    return insertDateHeaders([...oldChats, ...data]);
                                });
                            }, () => {
                                setErrorMsg("Connection error - failed to load older chats");
                            });
                        }}
                        onEndReachedThreshold={0.3}
                        data={chats}
                        inverted={true}
                        keyboardDismissMode={Platform.OS == "ios" ? "interactive" : "on-drag"}
                        onScrollEndDrag={Platform.OS == "android" ? Keyboard.dismiss : () => { }}
                        keyExtractor={(item, index) => (item.ID).toString()}
                        renderItem={({ item }) => <ChatMsg author={item.author} authorLastName={item.lastName} message={item.message} isIssue={item.isIssue} timestamp={item.timestamp} windowWidth={finalWidth} />}
                    />}
                <ChatInput
                    truckID={truckID}
                    onChatSucceed={(newText, newID) => {
                        resetPollTimer(); // go back to fast mode
                        setChats(oldChats => insertDateHeaders([{ author: user.userFirstName, lastName: user.userLastName, message: newText, ID: newID, timestamp: Math.round(new Date().getTime() / 1000) }, ...(oldChats.filter(c => c.ID != newID))]));
                    }}
                    onChatFailed={() => {
                        setErrorMsg("Connection error - failed to send message");
                    }}
                    onChatSubmit={() => {
                        setErrorMsg("");
                    }}
                />
            </View>
        </KeyboardDodger>
    );
}