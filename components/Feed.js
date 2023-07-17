import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import {dummypostdata} from '../Data/Postdata';
import Feeditem from './Feeditem';
export default function Feed() {
    return (
        <SafeAreaView style={Mystyles.feedcontainer}>



            <FlatList
                data={dummypostdata}

                renderItem={({item}) => {return (<Feeditem item={item}/>)}}
                keyExtractor={(item) => {return (item.Postid)}}
            />

        </SafeAreaView>
    );
}

const Mystyles = StyleSheet.create({

    feedcontainer: {flex: 1},
    itemcontentetxt: {color: "red"}
});