import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';


export default function Createpost() {
  return (
  <SafeAreaView style={Mystyles.createpostview}>
      <Text>This is create post  component</Text>
  </SafeAreaView>
  );
}

const Mystyles=StyleSheet.create({

    createpostview:{flex:1}
});