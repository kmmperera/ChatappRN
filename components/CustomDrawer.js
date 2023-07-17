import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import {Ionicons} from "@expo/vector-icons";
function CustomDrawer(props) {

    return (
        <View style={DrawerStyle.container}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={DrawerStyle.contentContainer}
            >

                <ImageBackground
                    source={require('../assets/drawerbg.jpeg')}
                    style={DrawerStyle.imageBackground}>

                    <Image
                        source={require('../assets/nopic.png')}
                        style={DrawerStyle.profilePic}
                    />

                    <Text
                        style={DrawerStyle.profileName}>
                        John Doe
                    </Text>

                    <View style={DrawerStyle.coinsView}>
                        <Text
                            style={DrawerStyle.coinsText}
                        >
                            280 Coins
                        </Text>
                        <Ionicons name="home" size={14} color="#fff" />
                    </View>
                 </ImageBackground>
                <View style={DrawerStyle.drawerList}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>


            <View style={DrawerStyle.bottomView}>
                <TouchableOpacity onPress={() => {}} style={DrawerStyle.touchableOpacity}>
                    <View style={DrawerStyle.bottomNavs}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text
                            style={DrawerStyle.bottomNavtexts}>
                            Tell a Friend
                            </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={DrawerStyle.touchableOpacity}>
                    <View style={DrawerStyle.bottomNavs}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={DrawerStyle.bottomNavtexts}>
                            Sign Out
                            </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const DrawerStyle = StyleSheet.create({

    container: {flex: 1},
    imageBackground: {padding: 20},
    contentContainer: {paddingTop:0},
    profilePic: {height: 80, width: 80, borderRadius: 40, marginBottom: 10},
    profileName: {color: '#fff', fontSize: 18, marginBottom: 5, },
    coinsView: {flexDirection: 'row'},
    coinsText: {color: '#fff', marginRight: 5, },
    drawerList: {flex: 1, backgroundColor: '#fff', paddingTop: 10},
    bottomView: {padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'},
    touchableOpacity: {paddingVertical: 15},
    bottomNavs: {flexDirection: 'row', alignItems: 'center'},
    bottomNavtexts: {fontSize: 15, marginLeft: 5, },

});




export default CustomDrawer;