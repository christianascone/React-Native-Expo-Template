/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       ButtonStyle.ts
 * @author     Christian Ascone
 * @date       9/14/19 9:56 AM
 */

import {StyleSheet} from "react-native";
import Colors from "../config/Colors";

const styles = StyleSheet.create({
    enabledButton: {
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    backgroundEnabled: {
        backgroundColor: Colors.buttonEnabledBackground,
    },
    text: {
        textAlign:'center',
        color: 'white'
    }
});

export default styles;