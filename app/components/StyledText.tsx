/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       StyledText.tsx
 * @author     Christian Ascone
 * @date       9/14/19 12:42 PM
 */

import React from 'react';
import {Text} from 'react-native';
import * as Fonts from "../config/Fonts";
import TextStyle from "@styles/TextStyle";

export function AvenirBookText(props) {
    return (
        <Text {...props} style={[props.style, {fontFamily: Fonts.names.avenirBook}]}/>
    );
}

export function AvenirHeavyText(props) {
    return (
        <Text {...props} style={[props.style, {fontFamily: Fonts.names.avenirHeavy}]}/>
    );
}

export function AvenirLightText(props) {
    return (
        <Text {...props} style={[props.style, {fontFamily: Fonts.names.avenirLight}]}/>
    );
}

export function AvenirMediumText(props) {
    return (
        <Text {...props} style={[props.style, {fontFamily: Fonts.names.avenirMedium}]}/>
    );
}

/**
 * Text with Avenir Light font and grey color
 * @param props
 * @returns {any}
 * @constructor
 */
export function AvenirLightGreyText(props) {
    return (
        <AvenirLightText {...props} style={[props.style, TextStyle.greyText]}/>
    );
}

/**
 * Text with Avenir Book font, for upper label
 * @param props
 * @returns {any}
 * @constructor
 */
export function AvenirBookUpperLabelText(props) {
    return (
        <AvenirBookText {...props} style={[props.style, TextStyle.upperLabel]}/>
    );
}

/**
 * Text with Avenir Book font, underlined
 * @param props
 * @returns {any}
 * @constructor
 */
export function AvenirBookUnderlinedText(props) {
    return (
        <AvenirBookText {...props} style={[props.style, TextStyle.underlined, TextStyle.topLabelText]}/>
    );
}

/**
 * Text with Avenir Medium font and primary color
 * @param props
 * @returns {any}
 * @constructor
 */
export function AvenirMediumPrimaryText(props) {
    return (
        <AvenirMediumText {...props} style={[props.style, TextStyle.primaryText]}/>
    );
}