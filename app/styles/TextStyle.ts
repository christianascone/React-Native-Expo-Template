/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       TextStyle.ts
 * @author     Christian Ascone
 * @date       9/14/19 12:42 PM
 */

import {StyleSheet} from "react-native";
import Colors from "../config/Colors";

const styles = StyleSheet.create({
    primaryText: {
        color: Colors.primaryColor,
    },
    greyText: {
        color: Colors.subtitleTextColor,
    },
    topLabelText: {
        color: Colors.topLabelColor,
    },
    underlined: {
        textDecorationLine: 'underline',
    },
    upperLabel: {
        color: Colors.subtitleTextColor,
        letterSpacing: 1,
        fontSize: 10,
        lineHeight: 10,
    },
    separator: {
        borderBottomColor: Colors.separatorColor,
        borderBottomWidth: 1,
        paddingBottom: 5
    }
});

export default styles;