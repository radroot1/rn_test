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

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            headerTitle: "View #2",
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={{ marginLeft:20, marginTop:20 }}>
            <Text>{"View #2"}</Text>
            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate({
                routeName: "HomePage3", params:{}
            }) }}>
                <Text>{"Next view >3"}</Text>
            </TouchableOpacity>
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