import React, { Component } from 'react';
import Header from '@org/react-header';
import Headline from '@org/react-headline';
import Footer from '@org/react-footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <Headline>Welcome to React</Headline>
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer>Footer deluxe!</Footer>
      </div>
    );
  }
}

export default App;
