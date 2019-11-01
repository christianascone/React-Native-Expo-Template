/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       AlertHelper.ts
 * @author     Christian Ascone
 * @date       9/14/19 4:26 PM
 */

import {Alert, Platform} from "react-native";
import {i18n} from "@i18n/i18n";
import {GenericHelper} from "./GenericHelper";

export class AlertHelper {

    /**
     * Shows a simple alert with title and message with a single OK button
     *
     * @param title
     * @param message
     */
    static showSimpleAlert(title, message) {
        if (Platform.OS === 'web') {
            alert(message);
        } else {
            Alert.alert(
                title,
                message,
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        }
    }

    /**
     * Show a simple error alert
     */
    static async showSimpleErrorAlert() {
        if (Platform.OS === 'ios')
            await GenericHelper.delay(500);
        if (Platform.OS === 'web') {
            alert(i18n.t('errors.something_went_wrong'));
        } else {
            Alert.alert(
                i18n.t('error'),
                i18n.t('errors.something_went_wrong'),
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
            );
        }
    }

    /**
     * Show an alert with "yes" and "no" button
     * @param title
     * @param message
     * @param {(boolean) => void} callback
     */
    static showYesNoAlert(title, message, callback: (boolean) => void) {
        if (Platform.OS === 'web') {
            callback(confirm(message));
        } else {
            Alert.alert(
                title,
                message,
                [
                    {text: i18n.t('alerts.yes'), onPress: () => callback(true)},
                    {text: i18n.t('alerts.no'), onPress: () => callback(false)},
                ],
                {cancelable: false},
            );
        }
    }
}