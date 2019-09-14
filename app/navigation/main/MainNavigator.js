/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       MainNavigator.js
 * @author     Christian Ascone
 * @date       9/14/19 11:01 AM
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
    MainTabNavigator
);
