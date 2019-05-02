import React, { Component } from 'react';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Body from './body/body';
import { positions, players } from '../store.js'



class App extends Component {
  state = {
    players
  }

  // getPlayersByPosition() {
  //   return this.state.exercises.reduce((exercises, exercise) => {
  //     const { muscles } = exercise
  //   })
  // }

  render() {
    return (
      <div>
        <Header/>
        <Body players={players}/>
        <Footer positions={positions}/>
      </div>
    );
  }
};

export default App;

