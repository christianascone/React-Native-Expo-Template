/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       MainScreen.tsx
 * @author     Christian Ascone
 * @date       9/14/19 4:43 PM
 */

import React, {Component} from 'react';
import {ScrollView, View,} from 'react-native';

import {AvenirLightGreyText} from '../components/StyledText';
import {i18n} from "../i18n/i18n";
import mainScreenStyle from "../styles/MainScreenStyle";
import globalScreenStyle from "../styles/GlobalStyle";
import {TextInputBlock} from "../components/TextInputBlock";
import {ConfirmButton} from "../components/ConfirmButton";
import {LogoImage} from "../components/Images/LogoImage";
import {validateEmail} from "../modules/Validator";
import {showSimpleAlert} from "../helpers/AlertHelper";
import {UsersApi} from "../services/src/apis";
import Loader, {LoaderState} from "../helpers/LoaderHelper";
import {NavigationProps, openLogin} from "../helpers/NavigationHelper";
import {environment} from "../environments/environment";

interface State extends LoaderState {
    email: string,
    emailValid: boolean,
}

export default class MainScreen extends Component<NavigationProps, State> {
    static navigationOptions = {};

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            emailValid: false,
            loading: false,
        };
    }

    render() {
        return (
            <View style={mainScreenStyle.container}>
                <Loader state={this.state}/>
                <ScrollView
                    style={mainScreenStyle.container}
                    contentContainerStyle={mainScreenStyle.contentContainer}>
                    <View style={[mainScreenStyle.getStartedContainer, mainScreenStyle.container, globalScreenStyle.globalMargins]}>
                        <View style={mainScreenStyle.welcomeContainer}>
                            <LogoImage style={mainScreenStyle.welcomeImage}/>
                        </View>

                        <View style={mainScreenStyle.welcomeContainer}>
                            <AvenirLightGreyText>
                                {i18n.t('main_screen_description')}
                            </AvenirLightGreyText>
                        </View>

                        <View style={mainScreenStyle.inputContainer}>
                            <TextInputBlock style={mainScreenStyle.emailInput} keyboardType='email-address'
                                            label={i18n.t('inputs.mail_address')} text={this.state.email}
                                            onChangeText={(text) => checkEmail(this, text)}/>
                        </View>

                        <View style={mainScreenStyle.buttonContainer}>
                            <ConfirmButton onPress={() => openNextPage(this)} title={i18n.t('buttons.try')}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

/**
 * Checks if the email is valid and update state
 * @param context Current view context
 * @param text Input text
 */
function checkEmail(context, text) {
    text = text.toLowerCase();
    let valid = validateEmail(text);
    console.log("Email validation: " + valid);
    context.setState({emailValid: valid});
    context.setState({email: text});
}

/**
 * Open the next page if email is valid
 * @param context
 */
function openNextPage(context) {
    if (environment.debugRoom) {
        openLogin(context, context.state.email);
        return;
    }

    if (!context.state.emailValid) {
        showSimpleAlert(i18n.t('error'), i18n.t('errors.invalid_email'));
        return;
    }

    new UsersApi(context).apiUsersExistsEmailGet({email: context.state.email}).then(resp => {
        if (resp && !resp._exists) {
            console.log("Email does not exist");
            // TODO: Go to register
        } else {
            console.log("Email EXISTS");
            openLogin(context, context.state.email);
        }
    }).catch(error => {
        console.log("Error: " + error);
    });
}