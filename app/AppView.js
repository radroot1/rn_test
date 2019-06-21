import React from 'react';
import {bindActionCreators} from "redux";
import {Dimensions, Image, NetInfo, Platform, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import NavigatorViewContainer from './NavView';
import * as actions from './AppViewState';
import {connect} from "react-redux";

class AppView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={{flex: 1}}>
            <NavigatorViewContainer/>
        </View>
    }
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignSelf: 'center'
    },
    update_message: {
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 14,
        letterSpacing: 0.78,
        lineHeight: 38
    }
});

export default connect(
    state => ({
    }),
    dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch),
        };
    }
)(AppView);
