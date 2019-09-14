/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       HomeScreen.tsx
 * @author     Christian Ascone
 * @date       9/14/19 5:23 PM
 */

import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View,} from 'react-native';

import {AvenirMediumText} from '../components/StyledText';
import {i18n} from "../i18n/i18n";
import homeScreenStyle from "../styles/HomeScreenStyle";
import globalScreenStyle from "../styles/GlobalStyle";
import {LoaderState} from "../helpers/LoaderHelper";

interface State extends LoaderState{
    myText: string,
}

export default class HomeScreen extends Component<any, State> {
    static navigationOptions = {
        title: 'My Test',
    };

    constructor(props) {
        super(props);

        this.state = {
            myText: "Test",
            loading: false,
        };
    }

    render() {
        return (
            <View style={homeScreenStyle.container}>
                <ScrollView
                    style={homeScreenStyle.container}
                    contentContainerStyle={homeScreenStyle.contentContainer}>
                    <View style={homeScreenStyle.welcomeContainer}>
                        <Image
                            source={
                                __DEV__
                                    ? require('../assets/images/robot-dev.png')
                                    : require('../assets/images/robot-prod.png')
                            }
                            style={homeScreenStyle.welcomeImage}
                        />
                    </View>

                    <View style={[homeScreenStyle.getStartedContainer, globalScreenStyle.globalMargins]}>
                        <DevelopmentModeNotice/>

                        <Text style={homeScreenStyle.getStartedText}>Get started by opening</Text>

                        <View
                            style={[homeScreenStyle.codeHighlightContainer, homeScreenStyle.homeScreenFilename]}>
                            <AvenirMediumText>screens/HomeScreen.tsx</AvenirMediumText>
                        </View>

                        <Text style={homeScreenStyle.getStartedText}>
                            {this.state.myText}
                        </Text>
                    </View>

                    <View style={homeScreenStyle.helpContainer}>
                        <TouchableOpacity onPress={handleHelpPress} style={homeScreenStyle.helpLink}>
                            <Text style={homeScreenStyle.helpLinkText}>
                                {i18n.t('foo')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={homeScreenStyle.tabBarInfoContainer}>
                    <Text style={homeScreenStyle.tabBarInfoText}>
                        This is a tab bar. You can edit it in:
                    </Text>

                    <View
                        style={[homeScreenStyle.codeHighlightContainer, homeScreenStyle.navigationFilename]}>
                        <AvenirMediumText style={homeScreenStyle.codeHighlightText}>
                            navigation/drawer/DrawerTabNavigator.js
                        </AvenirMediumText>
                    </View>
                </View>
            </View>
        );
    }
}

// HomeScreen.navigationOptions = {
//     header: null,
// };

function DevelopmentModeNotice() {
    if (__DEV__) {
        const learnMoreButton = (
            <Text onPress={handleLearnMorePress} style={homeScreenStyle.helpLinkText}>
                Learn more
            </Text>
        );

        return (
            <Text style={homeScreenStyle.developmentModeText}>
                Development mode is enabled: your app will be slower but you can use
                useful development tools. {learnMoreButton}
            </Text>
        );
    } else {
        return (
            <Text style={homeScreenStyle.developmentModeText}>
                You are not in development mode: your app will run at full speed.
            </Text>
        );
    }
}

function handleLearnMorePress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/workflow/development-mode/'
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
    );
}