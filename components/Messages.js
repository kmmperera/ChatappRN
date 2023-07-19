import React ,{useState}from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, ScrollView, TextInput} from 'react-native';
import Messagesitem from './Messageitem';
import {dummymessages} from '../Data/Messagesdata';
import Chatitem from './Chatitem';
export default function Messages() {
    const [inboxuserid,setInboxuserid]=useState(1);


    return (
        <SafeAreaView style={Mystyles.messagesview}>
            <View style={Mystyles.headerview}>
                <Text style={Mystyles.headertext}>Messages</Text>

            </View>
            <View style={Mystyles.flatlistcontainerview}>

                <FlatList
                    data={dummymessages}

                    renderItem={({item}) => {return (<Messagesitem item={item} usersetter={setInboxuserid} inboxuserid={inboxuserid} />)}}
                    keyExtractor={(item) => {return (item.Id)}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}

                />

            </View>
            <View style={Mystyles.chatboxview}>
                <View style={Mystyles.flatlistconatinerview}>
                    <FlatList
                        data={dummymessages[inboxuserid -1 ].Message}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => {return (<Chatitem item={item} />)}}
                        keyExtractor={(item) => {return (item)}}
                    />
                </View>
                <View style={Mystyles.sendconatinerview}>
                    <TextInput style={Mystyles.textinput} placeholder="What's up ?" />
                    <TouchableOpacity>
                        <Text style={Mystyles.sendtext}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Mystyles = StyleSheet.create({

    messagesview: {flex: 1},
    flatlistcontainerview: {paddingRight: 10},
    headerview: {height: 60, justifyContent: "flex-end", marginBottom: 20},
    headertext: {textAlign: "center", fontSize: 18, fontWeight: 700},
    chatboxview: {flex: 1, },
    flatlistconatinerview: {flex: 1, marginHorizontal: 15},
    sendconatinerview: {
        flexDirection: "row", marginBottom: 10, alignItems: "center", paddingHorizontal: 30,
        borderColor: "#f5fff5", borderWidth: 1, borderRadius: 25, marginHorizontal: 10, backgroundColor: "#f5fff5", 
        paddingVertical: 10


    },
    textinput: {flex: 1},
    sendtext: {fontWeight: 700, color: "#35b870"}

});