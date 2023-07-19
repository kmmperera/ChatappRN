import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image, FlatList, TextInput} from 'react-native';
import {useRoute, useNavigation} from "@react-navigation/native";
import {EvilIcons} from "@expo/vector-icons";
import {AntDesign} from '@expo/vector-icons';
import Commentitem from './Commentitem';
export default function Postdetails() {
    const {params: {item}, } = useRoute();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={Mystyles.postdetailsview}>
            <View style={Mystyles.statusbarempty}></View>
            <View style={Mystyles.headerview}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <AntDesign name="arrowleft" size={30} color="#35b870" />

                </TouchableOpacity>

                <Text style={Mystyles.headertext}>Post Details</Text>
            </View>

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
            <View style={Mystyles.commentsectionview}>
                <FlatList

                    data={item.Comments}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {return (<Commentitem Comments={item} />)}}
                    keyExtractor={(item) => {return (item.Comment)}}


                />

            </View>
            <View style={Mystyles.writecommentview}>
                <TextInput placeholder="Write a comment" style={Mystyles.inputtext} />
                <TouchableOpacity>
                    <Text style={Mystyles.commentbtntext}>Comment</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const Mystyles = StyleSheet.create({
    statusbarempty: {height: 30},
    headerview: {height: 70, flexDirection: "row", alignItems: "center", paddingHorizontal: 10, },
    headertext: {fontSize: 16, fontWeight: 600, marginLeft: 80},
    postdetailsview: {flex: 1},
    feedconatiner: {backgroundColor: "#e8e6e6", borderBottomColor: "#b8b6b6", borderBottomWidth: 1, },
    feeditemview: {padding: 20, flexDirection: "row"},
    profileimg: {height: 44, width: 44, borderRadius: 22, flexShrink: 0, },
    propicwreapper: {marginRight: 20},
    postcontentwrapper: {flex: 1},
    postcontenttext: {paddingRight: 5, marginTop: 10},
    postedby: {fontSize: 14, fontWeight: 700},
    iconview: {flexDirection: "row", paddingRight: 30, marginTop: 15, justifyContent: "space-between"},
    iconwrapperview: {flexDirection: "row", alignItems: "center"},
    postactiondatatext: {fontSize: 11},
    commentsectionview: {flex:1},
    writecommentview: {
        flexDirection: "row", marginBottom: 10, alignItems: "center", paddingHorizontal: 30,
        borderColor: "#f5fff5", borderWidth: 1,   backgroundColor: "#f5fff5",
        paddingVertical: 10
    },
    inputtext: {flex: 1},
    commentbtntext: {fontWeight: 700, color: "#35b870"}
});