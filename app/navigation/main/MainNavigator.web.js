/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       MainNavigator.web.js
 * @author     Christian Ascone
 * @date       9/14/19 11:01 AM
 */

import {createBrowserApp} from '@react-navigation/web';

import MainTabNavigator from './MainTabNavigator';

const mainTabNavigator = MainTabNavigator;
mainTabNavigator.path = '';

export default createBrowserApp(mainTabNavigator, {history: 'hash'});
