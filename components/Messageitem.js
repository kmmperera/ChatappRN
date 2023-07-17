import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';


export default function Messagesitem({item}) {
  return (
  <View style={Mystyles.messageitemview}>
      <Image style={Mystyles.propic}source={item.Profilepic}/>
      <Text 
      style={Mystyles.protext}
      ellipsizeMode='tail' 
      numberOfLines={1}
      >{item.Sender}</Text>
  </View>
  );
}

const Mystyles=StyleSheet.create({

    messageitemview:{flex:1,marginLeft:8,alignItems:"center",maxWidth:52,height:70},
    propic:{width:44,height:44,borderRadius:22},
    protext:{flex:1,marginBottom:10}
});