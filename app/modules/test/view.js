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
    FlatList, Touchable
} from 'react-native';

class Home extends React.Component {

    static propTypes = {};

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            headerTitle: "View #1",
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <View>
            <Text>{"View #1"}</Text>
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