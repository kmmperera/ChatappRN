import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';


export default function Chatitem({item}) {
  return (
  <View style={Mystyles.chatitemview}>
     <Text style={Mystyles.chattext}>This is a message</Text>
  </View>
  );
}

const Mystyles=StyleSheet.create({

    chatitemview:{flex:1},
    chattext:{paddingVertical:20},
   
});