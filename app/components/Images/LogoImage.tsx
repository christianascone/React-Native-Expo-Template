/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       LogoImage.tsx
 * @author     Christian Ascone
 * @date       9/14/19 9:45 AM
 */

import React from 'react';
import {Image} from "react-native";

export function LogoImage(props) {
    return (
        <Image
            {...props}
            style={[props.style]}
            source={
                require('../../assets/images/logo.png')
            }
        />
    );
}