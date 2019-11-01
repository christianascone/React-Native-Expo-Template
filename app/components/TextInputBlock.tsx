/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       TextInputBlock.tsx
 * @author     Christian Ascone
 * @date       9/14/19 12:27 PM
 */

import React from 'react';
import {TextInput, View} from 'react-native';
import TextStyle from '@styles/TextStyle';
import {AvenirBookUpperLabelText} from "./StyledText";

export function TextInputBlock(props) {
    return (
        <View>
            <AvenirBookUpperLabelText>
                {props.label}
            </AvenirBookUpperLabelText>
            <TextInput
                keyboardType={props.keyboardType}
                style={[props.style, TextStyle.separator]}
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.text}
            />
        </View>
    );
}