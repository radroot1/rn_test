import {connect} from "react-redux";
import React, {Fragment} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text as TextDefault,
    TouchableOpacity,
    View, Text, Easing,
    FlatList, Animated
} from 'react-native';

class Home extends React.Component {

    static propTypes = {};

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            headerTitle: "View #3",
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.toValue = 1;
        this.animation_switch = 0;
        this.animatedOpacity = new Animated.Value(0);
        this.animatedSpin = new Animated.Value(0);
    }

    renderCounter = () => {
        const { counter } = this.state;
        return <Fragment>
            <TouchableOpacity onPress={()=>{
                this.setState({counter:counter-1})
            }}>
                <Text>{"-"}</Text>
            </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity onPress={()=>{
                this.setState({counter:counter+1})
            }}><Text>{"+"}</Text>
            </TouchableOpacity>
        </Fragment>
    }

    render() {
        return <ScrollView>
            <View style={{ marginLeft:20, marginTop:20 }}>
            <Text>{"View #3"}</Text>
            <TouchableOpacity onPress={()=>{
                if(this.animation_switch === 0){
                    Animated.timing(this.animatedOpacity, { toValue:1, duration:1000, delay: 100 }).start();
                    this.animation_switch = this.animation_switch + 1;
                } else{
                    Animated.timing(
                        this.animatedSpin,
                        {
                            toValue: this.toValue,
                            duration: 1000,
                            easing: Easing.linear
                        }
                    ).start(()=>{
                        this.toValue = this.toValue === 1 ? 0 : 1;
                    })
                }
            }}>
                <Text>{"Run animation"}</Text>
            </TouchableOpacity>
                <Animated.View style={{
                    height:50, width:50, backgroundColor:"red",
                    transform: [{ rotate: this.animatedSpin.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        })
                    }],
                    opacity:this.animatedOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                    })}}>
                    <Text>{"Test"}</Text>
                </Animated.View>
                {this.renderCounter()}
         </View>
        </ScrollView>
    }
}

const styles = StyleSheet.create({

});

export default connect(
    state => ({

    }),
    null
)(Home);