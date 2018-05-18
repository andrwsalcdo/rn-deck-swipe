import React from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';
import { Container, Content, Header } from 'native-base';
import Deck from './src/Deck';
import Data from './Data';
import DeckCard from './src/DeckCard';

class App extends React.Component {
  renderCard = item => {
    return (
      <DeckCard key={item.id} title={item.text} image={{ uri: item.uri }} />
    );
  };

  noMoreCards = () => <Text>No more cards...</Text>;

  render() {
    return (
      <Container>
        <Header />
        <Deck
          data={Data}
          renderCard={this.renderCard}
          noMoreCards={this.noMoreCards}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
