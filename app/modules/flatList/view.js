import {connect} from "react-redux";
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text as TextDefault,
    TouchableOpacity,
    View, Text,
    FlatList
} from 'react-native';

class Home extends React.Component {

    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return <View>
            <Text>{"Test"}</Text>
        </View>
    }
}

const styles = StyleSheet.create({

});

export default connect(
    state => ({

    }),
    null
)(Home);