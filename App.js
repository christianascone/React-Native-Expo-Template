/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       App.js
 * @author     Christian Ascone
 * @date       9/14/19 5:58 PM
 */

import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {Component} from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as StorageHelper from './app/helpers/StorageHelper';
import {BaseAPI} from "./app/services/src/runtime";

import MainNavigator from './app/navigation/main/MainNavigator';

export default class App extends Component {
    state = {
        isLoadingComplete: false
    };
    props = {
        skipLoadingScreen: false
    };

    constructor(props) {
        super(props);
        this.props = props;
        console.log(props);
        console.log("Platform: " + Platform.OS);
        this.setup();
    }

    async setup() {
        await StorageHelper.readAccessToken().then(resp => {
            if(resp != null)
                BaseAPI.setToken(resp);
        });
        await Asset.loadAsync([
            require('./app/assets/images/robot-dev.png'),
            require('./app/assets/images/robot-prod.png'),
        ]);
        await Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./app/assets/fonts/SpaceMono-Regular.ttf'),
            'avenir-book': require('./app/assets/fonts/AvenirLTStd-Book.otf'),
            'avenir-heavy': require('./app/assets/fonts/AvenirLTStd-Heavy.otf'),
            'avenir-light': require('./app/assets/fonts/AvenirLTStd-Light.otf'),
            'avenir-medium': require('./app/assets/fonts/AvenirLTStd-Medium.otf'),
        });
        this.setState({isLoadingComplete: true});
    }

    render() {
        if (!this.state.isLoadingComplete || this.props.skipLoadingScreen) {
            return (
                <AppLoading
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    <MainNavigator/>
                </View>
            );
        }
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
    });
