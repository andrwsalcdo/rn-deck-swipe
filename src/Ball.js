import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';

class Ball extends React.Component {
  constructor() {
    super();
    this.position = new Animated.ValueXY({ x: 0, y: 0 });
  }

  componentDidMount() {
    Animated.spring(this.position, {
      toValue: { x: 300, y: 500 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <Text>I'm a Ball</Text>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'pink'
  }
};

export default Ball;
