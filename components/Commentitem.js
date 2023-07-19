import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';


export default function Commentitem({Comments}) {
    return (
        <View style={Mystyles.commentitemview}>

            <Image
                source={require("../assets/nopic.png")}
                style={Mystyles.proimg}
            />
            <View style={Mystyles.commentcontainerview}>
                <Text style={Mystyles.pronametext}>John Deo</Text>
                <Text style={Mystyles.commentcontenttext}>{Comments.Comment}</Text>
            </View>
        </View>
    );
}

const Mystyles = StyleSheet.create({

    commentitemview: {
        flex: 1, paddingLeft: 40, flexDirection: "row", paddingVertical: 10, paddingRight: 30, backgroundColor: "#f5fff5",
        borderBottomColor: "#f0f2f0", borderBottomWidth: 1
    },
    proimg: {width: 44, height: 44, borderRadius: 22, marginRight: 20},
    pronametext: {fontSize: 14, fontWeight: 700},
    commentcontainerview: {paddingRight: 20},
    commentcontenttext: {flexShrink: 1},

});