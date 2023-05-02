import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Homescreen extends React.Component
{

    handleSignIn ()
    {
        console.log(`direction la page de connexion`);
        const {navigate} = this.props.navigation;
        navigate ('Connection');

    };
    handleSignUp ()
    {
        const {navigate} = this.props.navigation;
        console.log(`direction la page d'inscription`);
        navigate ('Inscription');
    };

    render()
    {


        return (
            <View style={styles.container}>

                <Text style={styles.header}>Connexion / Inscription</Text>
                <TouchableOpacity style={styles.button_co} onPress={() => this.handleSignIn()}>
                    <Text style={styles.buttonText_co}>Connexion</Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={styles.button_in} onPress={() => this.handleSignUp()}>
                    <Text style={styles.buttonText_in}>Inscription</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    }




}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,

    },
    input: {
        width: '100%',
        height: 48,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 16,
    },
    button_co: {
        width: '100%',
        height: 48,
        backgroundColor: 'blue',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_in: {
        width: '100%',
        height: 48,
        backgroundColor: 'white',
        color: "",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText_co: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonText_in: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },


});