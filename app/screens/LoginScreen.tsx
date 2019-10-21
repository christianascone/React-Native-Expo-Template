/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       LoginScreen.tsx
 * @author     Christian Ascone
 * @date       9/14/19 5:23 PM
 */

import React, {Component} from 'react';
import {ScrollView, View,} from 'react-native';
import {i18n} from "../i18n/i18n";
import loginScreenStyle from "../styles/LoginScreenStyle";
import globalScreenStyle from "../styles/GlobalStyle";
import {AlertHelper} from "../helpers/AlertHelper";
import * as StorageHelper from "../helpers/StorageHelper";
import Loader, {LoaderState} from "../helpers/LoaderHelper";
import {AvenirBookUnderlinedText, AvenirLightGreyText, AvenirMediumPrimaryText} from "../components/StyledText";
import {TextInputBlock} from "../components/TextInputBlock";
import {NavigationProps} from "../helpers/NavigationHelper";
import {ConfirmButton} from "../components/ConfirmButton";
import {environment} from "../environments/environment";
import {OauthApi} from "../services/src/apis";
import {OAuthRequestFromJSON} from "../services/src/models";

interface State extends LoaderState {
    password: string,
    passwordValid: boolean,
}

export default class LoginScreen extends Component<NavigationProps, State> {
    static navigationOptions = {};

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordValid: false,
            loading: false,
        };
    }

    render() {
        return (
            <View style={loginScreenStyle.container}>
                <Loader state={this.state}/>
                <ScrollView
                    style={loginScreenStyle.container}
                    contentContainerStyle={loginScreenStyle.contentContainer}>
                    <View
                        style={[loginScreenStyle.getStartedContainer, loginScreenStyle.container, globalScreenStyle.globalMargins]}>
                        <View style={loginScreenStyle.welcomeContainer}>
                            <AvenirMediumPrimaryText>{i18n.t('screens.login.title')}</AvenirMediumPrimaryText>
                        </View>
                        <View style={loginScreenStyle.inputContainer}>
                            <TextInputBlock secureTextEntry={true} label={i18n.t('inputs.password')}
                                            text={this.state.password}
                                            onChangeText={(text) => checkPassword(this, text)}/>
                        </View>
                        <View style={loginScreenStyle.buttonContainer}>
                            <ConfirmButton onPress={() => openNextPage(this)} title={i18n.t('buttons.login')}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

/**
 * Checks password is not null or empty
 * @param context
 * @param text
 */
function checkPassword(context, text) {
    context.setState({password: text});
    if (text != null && text.trim() != '')
        context.setState({passwordValid: true});
}

/**
 * Open the next page if password is valid
 * @param context
 */
function openNextPage(context) {
    if (!context.state.passwordValid) {
        AlertHelper.showSimpleAlert(i18n.t('error'), i18n.t('errors.empty_password'));
        return;
    }

    let par = OAuthRequestFromJSON({
        grant_type: 'password',
        username: context.props.navigation.getParam('email'),
        password: context.state.password,
        client_id: environment.oauthClientId,
        client_secret: environment.oauthClientSecret
    });
    new OauthApi(context).oauthTokenPost({oAuthRequest: par}).then((resp) => {
        console.log("Ok");
        console.log(resp);
        if (resp.accessToken && resp.refreshToken) {
            StorageHelper.storeAccessToken(resp.accessToken);
            StorageHelper.storeRefreshToken(resp.refreshToken);
            // TODO: Go to dashboard
        } else {
            AlertHelper.showSimpleAlert(i18n.t('error'), i18n.t('errors.wrong_credentials_error'));
        }
    }).catch((error) => {
        console.log("Ko: " + error);
        AlertHelper.showSimpleAlert(i18n.t('error'), i18n.t('errors.wrong_credentials_error'));
    });
}