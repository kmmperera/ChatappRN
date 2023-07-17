import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {EvilIcons} from "@expo/vector-icons";


export default function Feeditem({item}) {
    return (
        <TouchableOpacity onPress={() => {}}>
            <View style={Mystyles.feedconatiner}>

                <View style={Mystyles.feeditemview}>
                    <View style={Mystyles.propicwreapper}>
                        <Image
                            style={Mystyles.profileimg}
                            source={item.Profilepic}


                        />
                    </View>
                    <View style={Mystyles.postcontentwrapper}>
                        <Text style={Mystyles.postedby}>{item.Postedby}</Text>

                        <Text style={Mystyles.postcontenttext}>{item.Content}</Text>
                        <View style={Mystyles.iconview}>
                            <View style={Mystyles.iconwrapperview}>
                                <EvilIcons name="comment" size={18} color="black" />
                                <Text style={Mystyles.postactiondatatext}>{item.Comments.length}</Text>
                            </View>
                            <View style={Mystyles.iconwrapperview}>
                                <EvilIcons name="like" size={18} color="black" />
                                <Text style={Mystyles.postactiondatatext}>{item.Likes.length}</Text>
                            </View>
                            <View style={Mystyles.iconwrapperview}>
                                <EvilIcons name="like" size={18} color="black" />
                                <Text style={Mystyles.postactiondatatext}>{item.Dislikes.length}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const Mystyles = StyleSheet.create({
    feedconatiner: {backgroundColor: "#e8e6e6", borderBottomColor: "#b8b6b6", borderBottomWidth: 1, },
    feeditemview: {padding: 20, flexDirection: "row"},
    profileimg: {height: 44, width: 44, borderRadius: 22, flexShrink: 0, },
    propicwreapper: {marginRight: 20},
    postcontentwrapper: {flex: 1},
    postcontenttext: {paddingRight: 5, marginTop: 10},
    postedby: {fontSize: 14, fontWeight: 700},
    iconview: {flexDirection: "row", paddingRight: 30, marginTop: 15, flex: 1, justifyContent: "space-between"},
    iconwrapperview:{flexDirection:"row",flex:1,alignItems:"center"},
    postactiondatatext:{fontSize:11}
});