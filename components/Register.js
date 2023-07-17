import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Header from './Header';

export default function Register() {
  return (


    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -64 : -50}

    >
      <SafeAreaView style={Mystyles.container}>

        <View style={Mystyles.bigview}>
        <Header/>


          <View style={Mystyles.proppicview}>
            <Text style={Mystyles.welcomtext}> Create Account</Text>
            <Text style={Mystyles.signintext}> Create a new account </Text>
          </View>

          <View style={Mystyles.viewform}>




            <View style={Mystyles.inputviews}>
              <Ionicons name="person-outline" size={16} color="black" />
              <TextInput style={Mystyles.inputtexts} placeholder="NAME" />
            </View>

            <View style={Mystyles.inputviews}>
              <Ionicons name="mail-outline" size={16} color="black" />
              <TextInput style={Mystyles.inputtexts} placeholder="EMAIL" />
            </View>
            <View style={Mystyles.inputviews}>
              <Ionicons name="phone-portrait-sharp" size={16} color="black" />
              <TextInput style={Mystyles.inputtexts} placeholder="PHONE" />
            </View>
            <View style={Mystyles.inputviews}>
              <Ionicons name="lock-closed-outline" size={16} color="black" />
              <TextInput
                secureTextEntry={true}
                style={Mystyles.inputtexts}
                placeholder="PASSWORD"
              />
            </View>
            <View style={Mystyles.inputviews}>
              <Ionicons name="lock-closed-outline" size={16} color="black" />
              <TextInput
                secureTextEntry={true}
                style={Mystyles.inputtexts}
                placeholder="CONFIRM PASSWORD"
              />
            </View>

            <TouchableOpacity
              onPress={() => {}}
              style={Mystyles.touchablelogin}>
              <Text style={Mystyles.logintext}> CREATE ACCOUNT </Text>
            </TouchableOpacity>

            <View style={Mystyles.createaccview}>
              <Text style={Mystyles.donthaveacctext}>
                {' '}
                Already have a account?
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={Mystyles.createacctext}> Login </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </SafeAreaView>

    </KeyboardAvoidingView>

  );
}

const Mystyles = StyleSheet.create({
  container: {flex: 1},
  bigview: {  flex: 1, justifyContent: "space-around"},
  proppicview: {paddingHorizontal: 40,alignItems: 'center'},
  welcomtext: {fontSize: 20, fontWeight: 700},
  signintext: {fontSize: 12, fontWeight: 300, color: 'grey'},
  viewform: {paddingHorizontal: 40,marginTop: 30},
  inputviews: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

  inputtexts: {flex: 1, paddingVertical: 0, fontSize: 12, marginLeft: 10},

  touchablelogin: {
    alignItems: 'center',
    backgroundColor: '#35b870',
    padding: 15,
    borderRadius: 5,
    marginTop: 40,
  },
  logintext: {color: '#fff'},
  createaccview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  createacctext: {color: '#35b870', fontSize: 12},
  donthaveacctext: {fontSize: 12},
});
