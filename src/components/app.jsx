import React, { Component } from 'react';
import Header from './layouts/header'
import Footer from './layouts/footer'
import Body from './body/body'



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

