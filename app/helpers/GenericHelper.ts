/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       GenericHelper.ts
 * @author     Christian Ascone
 * @date       9/29/19 6:28 PM
 */

export class GenericHelper {
    /**
     * Simple delay with promise
     * @param {number} ms Milliseconds to wait
     * @returns {Promise}
     */
    public static delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}