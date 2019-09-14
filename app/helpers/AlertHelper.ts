/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       AlertHelper.ts
 * @author     Christian Ascone
 * @date       9/14/19 4:26 PM
 */

import {Alert, Platform} from "react-native";

/**
 * Shows a simple alert with title and message with a single OK button
 * 
 * @param title
 * @param message
 */
export function showSimpleAlert(title, message) {
    if (Platform.OS === 'web') {
        alert(message);
    }else {
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