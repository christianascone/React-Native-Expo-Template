/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       Validator.ts
 * @author     Christian Ascone
 * @date       9/14/19 4:31 PM
 */

/**
 * Validates the given email and returns true or false
 * @param text
 * @returns {boolean}
 */
export function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
        return false;
    }
    else {
        return true;
    }
}