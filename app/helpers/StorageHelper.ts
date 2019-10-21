/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       StorageHelper.ts
 * @author     Christian Ascone
 * @date       9/14/19 5:58 PM
 */

import {AsyncStorage} from "react-native";
import {BaseAPI} from "../services/src";
import {Logger} from "./Logger";

const CLASS_NAME = 'StorageHelper';

const STORE_KEY = '@ReactStore';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN';

function getStoreKey(key) {
    return `${STORE_KEY}:${key}`;
}

/**
 * Stores a value with key in storage
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
export async function store(key, value) {
    try {
        await AsyncStorage.setItem(getStoreKey(key), value);
    } catch (error) {
        Logger.log(CLASS_NAME, "Error: " + error);
    }
}

/**
 * Reads the stored value with key
 * @param key
 * @returns {Promise<any>}
 */
export async function read(key) {
    try {
        const value = await AsyncStorage.getItem(getStoreKey(key));
        if (value !== null)
            return value;
        Logger.log(CLASS_NAME, "Not found");
    } catch (error) {
        Logger.log(CLASS_NAME, "Error: " + error);
    }
}

/**
 * Removes item with given key
 * @param key
 * @returns {Promise<void>}
 */
export async function remove(key) {
    try {
        await AsyncStorage.removeItem(getStoreKey(key));
    } catch (error) {
        Logger.log(CLASS_NAME, "Error: " + error);
    }
}

/**
 * Stores access token
 * @param value
 */
export function storeAccessToken(value) {
    store(ACCESS_TOKEN_KEY, value);
    BaseAPI.setToken(value);
}

/**
 * Reads access token
 * @returns {Promise<string>}
 */
export function readAccessToken() {
    return read(ACCESS_TOKEN_KEY);
}

/**
 * Deletes access token
 * @returns {Promise<void>}
 */
export function removeAccessToken() {
    remove(ACCESS_TOKEN_KEY);
    BaseAPI.deleteToken();
}

/**
 * Stores refresh token
 * @param value
 */
export function storeRefreshToken(value) {
    store(REFRESH_TOKEN_KEY, value);
}

/**
 * Reads refresh token
 * @returns {Promise<string>}
 */
export function readRefreshToken() {
    return read(REFRESH_TOKEN_KEY);
}

/**
 * Deletes refresh token
 * @returns {Promise<void>}
 */
export function removeRefreshToken() {
    return remove(REFRESH_TOKEN_KEY);
}