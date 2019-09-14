/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       i18n.ts
 * @author     Christian Ascone
 * @date       9/14/19 5:23 PM
 */

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const en = {
    foo: 'Foo En',
    bar: 'Bar en {{someValue}}',
    main_screen_description: 'Demo app',
    screens: {
        login: {
            title: 'Login',
        }
    },
    error: 'Error',
    errors: {
        invalid_email: 'Invalid email',
        empty_password: 'Empty password',
        wrong_credentials_error: 'Wrong credentials.',
    },
    inputs: {
        mail_address: 'Mail address',
        password: 'Password',
    },
    buttons: {
        try: 'Try',
        confirm: 'Confirm',
        login: 'Log in',
    },
};
const it = {
    foo: 'Fo it',
    bar: 'Bar it {{someValue}}',
    main_screen_description: 'App demo',
    screens: {
        login: {
            title: 'Accedi',
        }
    },
    error: 'Errore',
    errors: {
        invalid_email: 'Email non valida',
        empty_password: 'Password vuota',
        wrong_credentials_error: 'Credenziali errate.',
    },
    inputs: {
        mail_address: 'Indirizzo email',
        password: 'Password',
    },
    buttons: {
        try: 'Continua',
        confirm: 'Conferma',
        login: 'Log in',
    }
};

i18n.fallbacks = true;
i18n.translations = {en, it};
i18n.locale = Localization.locale;
console.log('Locale: ' + i18n.locale);

export {i18n};