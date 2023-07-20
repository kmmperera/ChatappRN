import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image,FlatList} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {dummypostdata} from '../Data/Postdata';
import Feeditem from './Feeditem';
import {Feather} from '@expo/vector-icons';



export default function Profile() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={Mystyles.profileview}>
            <View style={Mystyles.statusbarempty}></View>
            <View style={Mystyles.headerview}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <AntDesign name="arrowleft" size={30} color="#35b870" />

                </TouchableOpacity>

                <Text style={Mystyles.headertext}>Profile</Text>
            </View>
            <View style={Mystyles.aboutview}>
                <Image source={require("../assets/nopic.png")}
                    style={Mystyles.propic}
                />
                <Text style={Mystyles.nametext}>John Doe</Text>
                <TouchableOpacity style={Mystyles.changepropictouchable}>
                    <Text style={Mystyles.changepropictext}>Change Profile Picture</Text>
                </TouchableOpacity>
            </View>

            <View style={Mystyles.postsview}>

                <FlatList
                    data={dummypostdata}

                    renderItem={({item}) => {return (<Feeditem item={item} fromprofile={true}/>)}}
                    keyExtractor={(item) => {return (item.Postid)}}
                />


            </View>

               <View style={Mystyles.absoluteview}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Createpost")}}>
                    <View style={Mystyles.plusview}>
                        <Feather name="plus" size={32} color="#fff" />
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const Mystyles = StyleSheet.create({

    profileview: {flex: 1},
    statusbarempty: {height: 30},
    headerview: {height: 70, flexDirection: "row", alignItems: "center", paddingHorizontal: 10, },
    headertext: {fontSize: 16, fontWeight: 600, marginLeft: 80},
    aboutview: {marginTop: 20, justifyContent: "center", alignItems: "center"},
    postsview: {marginTop:20},
    propic: {width: 80, height: 80, borderRadius: 40},
    nametext: {fontSize: 16, fontWeight: 700, marginTop: 8, color: "#35b870"},
    changepropictext: {padding: 10, color: "#fff"},
    changepropictouchable: {marginTop: 10, backgroundColor: "#35b870", borderRadius: 18},
    plusview: {
        backgroundColor: "#35b870", borderRadius: 8, elevation: 9, shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    absoluteview: {position: "absolute", bottom: 30, right: 20}



});