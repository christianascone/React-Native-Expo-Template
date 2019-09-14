/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       config-env.ts
 * @author     Christian Ascone
 * @date       9/14/19 4:42 PM
 */

const fs = require('fs');

require('dotenv').config();
const environment = process.env.ENVIRONMENT;

let targetPath;
let debugRoom = process.env.DEBUG_ROOM;
let apiURL = process.env.ENDPOINT;
let oauthClientId = process.env.OAUTH_CLIENT_ID;
let oauthClientSecret = process.env.OAUTH_CLIENT_SECRET;
let sentryDsn = process.env.SENTRY_DSN;
let sentryEnableDevelopment = process.env.SENTRY_ENABLE_DEVELOPMENT;

const isProduction = environment === 'production';

if (isProduction) {
    targetPath = `./app/environments/environment.prod.ts`;

} else {
    targetPath = `./app/environments/environment.ts`;
    apiURL = process.env.ENDPOINT;
}

const envConfigFile = `
export const environment = {
    debugRoom: ${debugRoom},
    production: ${isProduction},
    apiUrl: '${apiURL}',
    oauthClientId: '${oauthClientId}',
    oauthClientSecret: '${oauthClientSecret}',
    sentryDsn: '${sentryDsn}',
    sentryEnableDevelopment: ${sentryEnableDevelopment},
};`;

fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
});