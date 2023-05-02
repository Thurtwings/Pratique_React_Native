import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Homescreen from './screens/homescreen';
import Connection from './screens/connection';
import Inscription from './screens/inscription';
import LoggedIn from './screens/loggedIn';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function App() {

return(

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Homescreen" component={Homescreen}/>
            <Stack.Screen name="Connection" component={Connection}/>
            <Stack.Screen name="Inscription" component={Inscription}/>
            <Stack.Screen name="LoggedIn" component={LoggedIn}/>
        </Stack.Navigator>
    </NavigationContainer>


);

};
