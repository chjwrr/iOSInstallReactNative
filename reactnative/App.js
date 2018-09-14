import {AppRegistry, StyleSheet, Text, View, TextInput,TouchableOpacity,NativeModules} from 'react-native';

import React, {Component} from 'react';

import AppNavigator from './routers';

import {
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation';

class Root extends Component {
    render() {
        return (
                <AppNavigator />
        );
    }
}
const styles = StyleSheet.create({
    screenStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

AppRegistry.registerComponent('myTest', () => Root);