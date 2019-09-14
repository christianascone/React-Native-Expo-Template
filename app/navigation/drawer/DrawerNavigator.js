/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       DrawerNavigator.js
 * @author     Christian Ascone
 * @date       9/14/19 11:01 AM
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';

import DrawerTabNavigator from './DrawerTabNavigator';

export default createAppContainer(
    DrawerTabNavigator
);
