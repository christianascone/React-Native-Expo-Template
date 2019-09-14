/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       MainTabNavigator.js
 * @author     Christian Ascone
 * @date       9/14/19 6:00 PM
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {Platform, StyleSheet, TouchableOpacity, View,} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import MainScreen from "../../screens/MainScreen";
import LoginScreen from "../../screens/LoginScreen";
import {LeftArrowImage} from "../../components/Images/LeftArrowImage";
import globalScreenStyle from "../../styles/GlobalStyle";

const config = Platform.select({
    ios: {
        headerMode: 'float',
        initialRouteName: 'Home',
    },
    android: {
        headerMode: 'screen',
        initialRouteName: 'Home',
    },
    default: {
        headerMode: 'screen',
        initialRouteName: 'Home',
    },
});

//Navigation Drawer Structure for all screen
class NavigationHeaderLeftBack extends Component {
    /**
     * Go to previous page
     */
    goBack = () => {
        //Props to open/close the drawer
        this.props.navigationProps.pop();
    };

    render() {
        return (
            <View style={globalScreenStyle.globalMargins}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <LeftArrowImage style={{width: 20, height: 20}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const headerStyles = StyleSheet.create({
    header: {
        elevation: 0,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
    }
});

/**
 * Gets options for Navigation header
 * @param navigation
 * @returns object
 */
function headerNavigationOptions(navigation) {
    return {
        headerLeft: <NavigationHeaderLeftBack navigationProps={navigation}/>,
        headerStyle: headerStyles.header
    }
}

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: MainScreen,
        },
    },
    {
        headerMode: 'none',
    }
);

const LoginStack = createStackNavigator(
    {
        Home: {
            screen: LoginScreen,
            navigationOptions: ({navigation}) => headerNavigationOptions(navigation),
        },
    },
    config
);

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        Login: {
            screen: LoginStack
        }
    },
    {
        headerMode: 'none',
    }
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};


export default RootStack;
