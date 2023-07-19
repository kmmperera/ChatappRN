import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default function Chatitem({item}) {
    const evennumber = item.length % 2 == 0 ? true : false;
    return (
        <View style={evennumber == true ? Mystyles.chatbigconatiner : Mystyles.ownchatbigcontainer}>
        <View style={evennumber == true ? Mystyles.chatitemview : Mystyles.ownchatitemview}>

            <Text style={evennumber == true ? Mystyles.chattext : Mystyles.ownchattext}>{item}</Text>

        </View>
        </View>
    );
}

const Mystyles = StyleSheet.create({

    chatitemview: {
        backgroundColor: "#f5fff5", marginBottom: 20, maxWidth: 240, borderColor: "#f5fff5",
        borderWidth: 1, borderRadius: 30, borderBottomLeftRadius: 0

    },
    chatbigconatiner:{flex:1,alignItems:"flex-start"},
    ownchatbigcontainer:{flex:1,alignItems:"flex-end"},
    ownchatitemview: {
        backgroundColor: "#35b870", marginBottom: 20, maxWidth: 240, borderColor: "#35b870",
        borderWidth: 1, borderRadius: 30, borderBottomRightRadius: 0,

    },
    chattext: {paddingVertical: 20, paddingHorizontal: 20},
    ownchattext: {paddingVertical: 20, paddingHorizontal: 20,color:"#fff"},

});