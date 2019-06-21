import React, { PureComponent } from 'react';
import { View, Image, ListView, Text, Animated } from 'react-native';
import styles from './styles';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class AnimatedScrollView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
      scrollY: new Animated.Value(0)
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.backgroundImage, {
            opacity: this.state.scrollY.interpolate({
              inputRange: [0, 250],
              outputRange: [1, 0]
            }),
            transform: [{
              scale: this.state.scrollY.interpolate({
                inputRange: [-200, 0, 1],
                outputRange: [1.4, 1, 1]
              })
            }]
          }]}
          source={require('./img/bg.jpg')}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
          renderScrollComponent={this.renderScroll.bind(this)}
        />
      </View>
    );
  }
  renderRow(row) {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{row.text}</Text>
      </View>
    );
  }
  renderHeader() {
    return <View style={styles.header} />;
  }
  renderScroll(props) {
    return (
      <Animated.ScrollView
        {...props}
        scrollEventThrottle={16}
        onScroll={
          Animated.event([{
            nativeEvent: { contentOffset: { y: this.state.scrollY } }
          }], {
            useNativeDriver: true
          })
        }
      />
    );
  }
}
