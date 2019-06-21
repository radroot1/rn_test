import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/store';
import AppView from './app/AppView';
import React, {Component} from 'react';
import {AppRegistry, PushNotificationIOS, View, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import {PersistGate} from 'redux-persist/integration/react'

export default class App extends Component {
    render() {
        return (<View style={{flex: 1}}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppView/>
                    </PersistGate>
                </Provider>
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
