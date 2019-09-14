/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       DrawerTabNavigator.js
 * @author     Christian Ascone
 * @date       9/14/19 11:01 AM
 */

import React, {Component} from 'react';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {Dimensions, Image, Platform, TouchableOpacity, View,} from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from '../../screens/HomeScreen';
import LinksScreen from '../../screens/LinksScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import SidebarMenu from '../navigation/drawer/SidebarMenu';

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
    //Top Navigation Header with Donute Button
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../../assets/images/menu.png')}
                        style={{width: 25, height: 25, marginLeft: 5}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            }),
        },
    },
    config
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

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: {
            screen: LinksScreen,
            navigationOptions: ({navigation}) => ({
                headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            }),
        },
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'Links',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
    {
        Settings: {
            screen: SettingsScreen,
            navigationOptions: ({navigation}) => ({
                headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            }),
        },
    },
    config
);

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};

SettingsStack.path = '';

//Drawer Navigator Which will provide the structure of our App
const drawerNavigatorExample = createDrawerNavigator(
    {
        //Drawer Optons and indexing
        NavScreen1: {
            screen: HomeStack,
            navigationOptions: {
                drawerLabel: 'Home',
            },
        },
        NavScreen2: {
            screen: LinksStack,
            navigationOptions: {
                drawerLabel: 'Links',
            },
        },
        NavScreen3: {
            screen: SettingsStack,
            navigationOptions: {
                drawerLabel: 'Settings',
            },
        },
    },
    {
        //For the Custom sidebar menu we have to provide our CustomSidebarMenu
        contentComponent: SidebarMenu,
        //Sidebar width
        drawerWidth: Dimensions.get('window').width - 130,
    }
);

export default drawerNavigatorExample;
