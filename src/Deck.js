import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
  PanResponder
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

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
      onPanResponderRelease: (evt, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPostion();
        }
      }
    });
  }
  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => console.log('on swipe complete'));
  }

  resetPostion() {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  getCardStyle() {
    const rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });
    return {
      ...this.position.getLayout(),
      transform: [{ rotate }]
    };
  }

  renderCards() {
    return this.props.data.map((item, i) => {
      if (i === 0) {
        return (
          <Animated.View
            key={item.id}
            {...this._panResponder.panHandlers}
            style={this.getCardStyle()}
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
