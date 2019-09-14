/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       PushManager.ts
 * @author     Christian Ascone
 * @date       9/14/19 11:19 AM
 */

import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';
import {UserTokensApi} from "../services/src/apis";
import {UserTokenOs} from "../services/src/models";
import {Platform} from "react-native";
import {LoaderState} from "../helpers/LoaderHelper";
import {Component} from "react";

/**
 * Registers device token for push notifications.
 * It sends token to backend.
 *
 * @returns {Promise<void>}
 */
export async function registerForPushNotificationsAsync(context: Component<any, LoaderState>) {
    const {status: existingStatus} = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log("Token: " + token);
    let platform = Platform.OS;
    let os = platform === 'ios' ? UserTokenOs.IOS : UserTokenOs.ANDROID;

    let a = new UserTokensApi(context);
    a.apiUserTokensPost({userToken: {os: os, token: token}}).then(resp => {
        console.log(resp);
    }).catch(error => {
        console.log(error);
    });
}