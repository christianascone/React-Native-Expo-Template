/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       SentryConfig.web.ts
 * @author     Christian Ascone
 * @date       10/10/19 10:47 AM
 */

import {environment} from "../environments/environment";

const sentryDsn = environment.sentryDsn;
const sentryEnableDevelopment = environment.sentryEnableDevelopment;

export const config = {
    sentryDsn: sentryDsn,
    sentryEnableDevelopment: sentryEnableDevelopment,
};

export function sentrySetup() {
    // Dummy
}