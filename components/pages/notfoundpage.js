import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert, Dimensions } from 'react-native';
import {AppButton} from "../misc/Button";
import { useHistory } from "react-router-dom";

export default function Home () {
    const history = useHistory();
    const bwidth = Dimensions.get('window').width/2;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>404 Page Not Found</Text>
            
            <View>
                
                <AppButton
                    btnTitle='Back to Home'
                    btnBgColor='transparent'
                    textColor='white'
                    btnPress={() => history.push('/')}
                    btnWidth={bwidth}/>
            </View>
            <Text style={styles.sub2title}>Carbone App 2020</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4297A0',
        alignItems: 'center',

    },
    title: {
        marginTop: Dimensions.get('window').height/4.5,
        marginBottom: 250,
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontWeight: '200' 
    },
    sub2title: {
        color: 'white',
        fontWeight: '200',
        position: 'absolute',
        bottom: 100
    }
  });
  