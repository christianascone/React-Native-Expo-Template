import {environment} from "../environments/environment";
import * as Sentry from 'sentry-expo';
import Constants from "expo-constants";

const sentryDsn = environment.sentryDsn;
const sentryEnableDevelopment = environment.sentryEnableDevelopment;

export const config = {
    sentryDsn: sentryDsn,
    sentryEnableDevelopment: sentryEnableDevelopment,
};

export function sentrySetup() {
    Sentry.init({
        dsn: config.sentryDsn,
        enableInExpoDevelopment: config.sentryEnableDevelopment,
        debug: true
    });
    Sentry.setRelease(Constants.manifest.revisionId);
}