import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import {dummypostdata} from '../Data/Postdata';
import Feeditem from './Feeditem';
import {Feather} from '@expo/vector-icons';
import {NavigationContainer} from '../node_modules/@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

export default function Feed() {
    const navigation =useNavigation();
    return (
        <SafeAreaView style={Mystyles.feedcontainer}>



            <FlatList
                data={dummypostdata}

                renderItem={({item}) => {return (<Feeditem item={item} />)}}
                keyExtractor={(item) => {return (item.Postid)}}
            />
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

    feedcontainer: {flex: 1},
    itemcontentetxt: {color: "red"},
    plusview: {
        backgroundColor: "#35b870", borderRadius: 8, elevation: 9, shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    absoluteview: {position: "absolute", bottom: 30, right: 20}
});