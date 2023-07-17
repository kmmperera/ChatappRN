import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();


  return (
    <View style={Mystyles.headerview}>
      <View style={Mystyles.containerview}>
        <TouchableOpacity>
          <Text style={Mystyles.chatmetext}>ChatMe</Text>
        </TouchableOpacity>
        <View style={Mystyles.touchablewrapper}>
          <TouchableOpacity onPress={() => {navigation.navigate("Login")}}
            style={route.name == "Login" || route.name == "Frontpage" ? Mystyles.touchablebtns : Mystyles.touchablebtnsoff}>
            <Text style={route.name == "Login"  || route.name == "Frontpage" ? Mystyles.touchabletext : Mystyles.touchabletextoff}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate("Register")}}
            style={route.name == "Register" ? Mystyles.touchablebtns : Mystyles.touchablebtnsoff}>
            <Text style={route.name == "Register" ? Mystyles.touchabletext : Mystyles.touchabletextoff}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Mystyles = StyleSheet.create({
  headerview: {
    height: 100,

    justifyContent: 'flex-end',
  },
  containerview: {
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatmetext: {fontSize: 18, fontWeight: 700, paddingVertical: 5},
  touchablewrapper: {flexDirection: 'row', justifyContent: 'space-between'},
  touchablebtns: {
    paddingVertical: 0,
    justifyContent: 'center',
    marginLeft: 4,
    fontSize: 16,
    backgroundColor: '#35b870',

    padding: 20,
    borderRadius: 18,
  },
  touchablebtnsoff: {
    backgroundColor: '#fff',
    paddingVertical: 0,
    justifyContent: 'center',
    marginLeft: 4,
    fontSize: 16,

    padding: 20,
    borderRadius: 18,
  },
  touchabletextoff: {color: '#35b870'},
  touchabletext: {color: '#fff'},
});
