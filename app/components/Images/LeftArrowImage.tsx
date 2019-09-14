/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       LeftArrowImage.tsx
 * @author     Christian Ascone
 * @date       9/14/19 4:32 PM
 */

import React from 'react';
import {Image} from "react-native";

export function LeftArrowImage(props) {
    return (
        <Image
            {...props}
            style={[props.style]}
            source={
                require('../../assets/images/left_arrow.png')
            }
        />
    );
}