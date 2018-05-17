import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  PanResponder
} from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this._panResponder = new PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gesture) => {
        // get dx & dy and move it to aniimated system
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });
  }

  renderCards() {
    return this.props.data.map((item, i) => {
      if (i === 0) {
        return (
          <Animated.View
            key={item.id}
            {...this._panResponder.panHandlers}
            style={this.position.getLayout()}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }

      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
