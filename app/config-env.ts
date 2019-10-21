/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       config-env.ts
 * @author     Christian Ascone
 * @date       9/14/19 4:42 PM
 */

import fs = require('fs');

require('dotenv').config();
const environment = process.env.ENVIRONMENT;

let targetPath;
let envFileName;
let webEnvFileName;
let debugRoom = process.env.DEBUG_ROOM;
let apiURL = process.env.ENDPOINT;
let oauthClientId = process.env.OAUTH_CLIENT_ID;
let oauthClientSecret = process.env.OAUTH_CLIENT_SECRET;
let sentryDsn = process.env.SENTRY_DSN;
let sentryEnableDevelopment = process.env.SENTRY_ENABLE_DEVELOPMENT;
let googleApiKey = process.env.GOOGLE_API_KEY;

const isProduction = environment === 'production';

targetPath = `./app/environments/`;

if (isProduction) {
    envFileName = `environment.prod.ts`;
    webEnvFileName = `webEnvironment.prod.js`;
} else {
    envFileName = `environment.ts`;
    webEnvFileName = `webEnvironment.js`;
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
    googleApiKey: '${googleApiKey}',
};`;


const webEnvConfigFile = `
const web_environment = {
    googleApiKey: '${googleApiKey}',
};

module.exports = web_environment;
`;

fs.writeFile(targetPath + envFileName, envConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
});

fs.writeFile(targetPath + webEnvFileName, webEnvConfigFile, function (err) {
    if (err) {
        console.log(err);
    }
});