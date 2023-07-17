import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import {dummyfollowers} from '../Data/Followersdata';
import Followersitem from './Followersitem';


export default function Followings() {
    return (
        <SafeAreaView style={Mystyles.followersconatiner}>



            <FlatList
                data={dummyfollowers}

                renderItem={({item}) => {return (<Followersitem item={item}/>)}}
                keyExtractor={(item) => {return (item.Userid)}}
            />

        </SafeAreaView>
    );
}

const Mystyles = StyleSheet.create({

    followersconatiner: {flex:1,},
  
});