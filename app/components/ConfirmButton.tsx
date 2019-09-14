/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       ConfirmButton.tsx
 * @author     Christian Ascone
 * @date       9/14/19 4:33 PM
 */

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ButtonStyle from "../styles/ButtonStyle";

export function ConfirmButton(props) {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} {...props}
                              style={[props.style, ButtonStyle.enabledButton, ButtonStyle.backgroundEnabled]}>
                <Text style={ButtonStyle.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}