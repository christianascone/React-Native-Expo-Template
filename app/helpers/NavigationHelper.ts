/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       NavigationHelper.ts
 * @author     Christian Ascone
 * @date       9/14/19 1:10 PM
 */

import {Component} from "react";

const loginRoute = 'Login';

/**
 * Props interface with navigation object
 */
export interface NavigationProps {
    navigation
}

/**
 * Open the login page
 * @param {React.Component<NavigationProps, any>} context
 * @param email
 */
export function openLogin(context: Component<NavigationProps, any>, email: string) {
    context.props.navigation.navigate(loginRoute, {email: email});
}