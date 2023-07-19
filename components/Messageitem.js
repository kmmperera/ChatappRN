import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';


export default function Messagesitem({item,usersetter,inboxuserid}) {
  return (
  <View style={Mystyles.messageitemview}>
  <TouchableOpacity style={Mystyles.touchablestyle} onPress={()=>{usersetter(item.Id)}}>
      <Image style={inboxuserid == item.Id ? Mystyles.activepropic : Mystyles.propic}source={item.Profilepic}/>
      <Text 
      style={inboxuserid == item.Id ? Mystyles.activepropictext : Mystyles.protext}
      ellipsizeMode='tail' 
      numberOfLines={1}
      >{item.Sender}</Text>
      </TouchableOpacity>
  </View>
  );
}

const Mystyles=StyleSheet.create({

    messageitemview:{flex:1,marginLeft:8,alignItems:"center",maxWidth:52,height:70},
    touchablestyle:{alignItems:"center"},
    propic:{width:44,height:44,borderRadius:22},
    protext:{flex:1,marginBottom:10},
    activepropic:{width:44,height:44,borderRadius:22 ,borderColor:"#35b870",borderWidth:3},
    activepropictext:{flex:1,marginBottom:10,color:"#35b870",fontWeight:600}
});