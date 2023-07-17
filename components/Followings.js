import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import {dummyfollowings} from '../Data/Followingsdata';
import Followingsitem from './Followingsitem';


export default function Followings() {
    return (
        <SafeAreaView style={Mystyles.followingsconatiner}>



            <FlatList
                data={dummyfollowings}

                renderItem={({item}) => {return (<Followingsitem item={item}/>)}}
                keyExtractor={(item) => {return (item.Userid)}}
            />

        </SafeAreaView>
    );
}

const Mystyles = StyleSheet.create({

    followingsconatiner: {flex:1,},
  
});