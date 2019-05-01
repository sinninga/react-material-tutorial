import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
import Body from './body'



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
};

export default App;

