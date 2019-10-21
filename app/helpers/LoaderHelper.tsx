/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    react-native-expo-template.nosync
 * @file       LoaderHelper.tsx
 * @author     Christian Ascone
 * @date       9/14/19 10:31 AM
 */

import React, {Component} from 'react';
import {ActivityIndicator, Modal, Platform, StyleSheet, View} from 'react-native';
import {Logger} from "./Logger";
import Layout from "../config/Layout";
import {Header} from "react-navigation";

export function Loader(props) {
    const {
        state: LoaderState,
        ...attributes
    } = props;

    if (Platform.OS !== 'web')
        return (
            <View>
                <Modal
                    transparent={true}
                    animationType={'none'}
                    visible={props.state.loading}
                    onRequestClose={() => {
                        console.log('close modal')
                    }}>
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator
                                animating={props.state.loading}/>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    else if (props.state.loading)
        return (
            <View style={styles.webActivityIndicatorWrapper}>
                <ActivityIndicator
                    animating={props.state.loading}/>
            </View>
        );
    else
        return null;
}

/**
 * State interface with loading property
 */
export interface LoaderState {
    loading: boolean,
    showNoData?: boolean,
}

/**
 * Update state with loading true so the loader start
 * @param {React.Component<any, LoaderState>} context
 */
export function startLoader(context: Component<any, LoaderState>) {
    Logger.log(context.constructor.name, "Starting loader");
    context.setState({loading: true});
}

/**
 * Update state with loading false so the loader stop
 * @param {React.Component<any, LoaderState>} context
 */
export function stopLoader(context: Component<any, LoaderState>) {
    Logger.log(context.constructor.name, "Stopping loader");
    context.setState({loading: false});
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    webActivityIndicatorWrapper: {
        zIndex: 99,
        backgroundColor: '#00000040',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: Layout.window.height - Header.HEIGHT,
        width: Layout.window.width,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default Loader;