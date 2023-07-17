import React from 'react';
import {Image, Pressable} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import {Ionicons} from "@expo/vector-icons";

import CustomDrawer from '../components/CustomDrawer.js';
import Dummy from '../components/Dummy';
import Login from '../components/Login';
import Register from '../components/Register';
import Frontpage from '../components/Frontpage';
import Feed from '../components/Feed';
import Followings from '../components/Followings';
import Followers from '../components/Followers';
import Messages from '../components/Messages';


const Wrapperstack = createNativeStackNavigator();
const Stacknav = createNativeStackNavigator();
const Drawernav = createDrawerNavigator();
const Bottomtabnav = createBottomTabNavigator();
const Toptabnav = createMaterialTopTabNavigator();

function Wrapperstackfunc() {

    return (
        <Wrapperstack.Navigator
        screenOptions={{

            headerShown: false,}}
        
        >
            < Wrapperstack.Screen
                name="Frontpage"
                component={Frontpage}

            />
            < Wrapperstack.Screen
                name="Login"
                component={Login}

            />
            < Wrapperstack.Screen
                name="Register"
                component={Register}

            />
            < Wrapperstack.Screen
                name="Drawer"
                component={Drawerfunc}

            />

        </Wrapperstack.Navigator>

    );
}

function Drawerfunc() {

    return (
        <Drawernav.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{

                headerShown: false,

                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15,
                }
            }}

        >
            < Drawernav.Screen
                name="Stacknavs"
                component={Stacknavfunc}
                options={{

                    drawerIcon: ({color}) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />
            < Drawernav.Screen
                name="Post"
                component={Dummy}
                options={{

                    drawerIcon: ({color}) => (
                        <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}

            />
        </Drawernav.Navigator>

    );
}

function Stacknavfunc() {

    return (
        <Stacknav.Navigator screenOptions={{headerShown: false}}>
            < Stacknav.Screen name="Bottomtabs" component={Bottomtabnavfunc} />
        </Stacknav.Navigator>

    );
}
function Bottomtabnavfunc({navigation}) {
    return (

        <Bottomtabnav.Navigator
            screenOptions={({route}) => (

                {
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName = "";
                        iconName = route.name === "Home" && focused ? "home" : route.name === "Home" ? "home-outline" : route.name === "Messages" && focused ? "mail" : route.name === "Messages" ? "mail-outline" : "";

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#35b870",
                    tabBarInactiveTintColor: "grey",

                }
            )}>
            < Bottomtabnav.Screen name="Home" component={Toptabnavfunc}
                options={{
                    headerLeft: () => {

                        return (
                            <Pressable onPress={() => {navigation.openDrawer();}}>

                                <Image
                                    source={require("../assets/nopic.png")}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 100,
                                        marginLeft: 15,
                                    }}

                                />
                            </Pressable>
                        );
                    }
                }}
            />
            < Bottomtabnav.Screen name="Messages" component={Messages} options={{headerShown:false}} />
        </Bottomtabnav.Navigator>
    );
}

function Toptabnavfunc() {
    return (

        <Toptabnav.Navigator screenOptions={{
            
            headerShown: false,
            tabBarLabelStyle: {
                textTransform: "capitalize",
                fontWeight: "bold",
              },
              tabBarIndicatorStyle: {
                height: 5,
                borderRadius: 5,
                backgroundColor: "#35b870",
              },
            
            }}>
            < Toptabnav.Screen name="Feed" component={Feed} />
            < Toptabnav.Screen name="Followers" component={Followers} />
            < Toptabnav.Screen name="Followings" component={Followings} />

        </Toptabnav.Navigator>

    );
}

export default function Navigations() {
    const Mytheme = {
        ...DefaultTheme,
        colors: {...DefaultTheme.colors, background: "#fff"}
    };
    return (
        < NavigationContainer theme={Mytheme}>
            <Wrapperstackfunc />
        </NavigationContainer>

    );

}