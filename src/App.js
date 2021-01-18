import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    UNSAFE_componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDAy6gt-ApP-jnOho6M7G01jAdil2CdwFY",
                authDomain: "rn-auth-674ab.firebaseapp.com",
                projectId: "rn-auth-674ab",
                storageBucket: "rn-auth-674ab.appspot.com",
                messagingSenderId: "1053165065014",
                appId: "1:1053165065014:web:40e993e267950ac2e01997",
                measurementId: "G-HQ4Y2BT12C"
            });
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
