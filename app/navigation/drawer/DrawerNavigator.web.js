/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       DrawerNavigator.web.js
 * @author     Christian Ascone
 * @date       9/14/19 11:01 AM
 */

import {createBrowserApp} from '@react-navigation/web';

import DrawerTabNavigator from './DrawerTabNavigator';

const drawerNavigator = DrawerTabNavigator;
drawerNavigator.path = '';

export default createBrowserApp(drawerNavigator, {history: 'hash'});
