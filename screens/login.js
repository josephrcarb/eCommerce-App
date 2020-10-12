import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default class Login extends Component {
    static navigationOptions = { header: null }
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>At the Login Screen</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0fbcf9',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
  });