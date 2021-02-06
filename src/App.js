import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button
                        onPress={() => firebase.auth().signOut()}
                    >
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
