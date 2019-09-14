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

export function Loader(props) {
    const {
        state: LoaderState,
        ...attributes
    } = props;

    return (
        <View>
            {Platform.OS !== 'web' &&
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
            }
        </View>
    )
};

/**
 * State interface with loading property
 */
export interface LoaderState {
    loading: boolean
}

/**
 * Update state with loading true so the loader start
 * @param {React.Component<any, LoaderState>} context
 */
export function startLoader(context: Component<any, LoaderState>) {
    console.log("Starting loader");
    context.setState({loading: true});
}

/**
 * Update state with loading false so the loader stop
 * @param {React.Component<any, LoaderState>} context
 */
export function stopLoader(context: Component<any, LoaderState>) {
    console.log("Stopping loader");
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
        height: 200,
        width: 200,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default Loader;