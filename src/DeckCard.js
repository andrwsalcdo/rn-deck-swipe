import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Icon,
  Button
} from 'native-base';

class DeckCard extends Component {
  render() {
    const { title, image } = this.props;
    return (
      <Card style={{ elevation: 3 }}>
        <CardItem>
          <Left>
            <Thumbnail source={image} />
            <Body>
              <Text>{title}</Text>
              <Text>NativeBase</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image style={{ height: 300, flex: 1 }} source={image} />
        </CardItem>
        <CardItem>
          <Icon name="heart" style={{ color: '#ED4A6A' }} />
          <Text>{title}</Text>
        </CardItem>
        <CardItem>
          <Text style={{ marginBottom: 5 }}>I can customize</Text>
        </CardItem>
        <CardItem>
          <Button style={{ flex: 1 }} iconRight>
            <Text>This Button</Text>
            <Icon name="code" />
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default DeckCard;
