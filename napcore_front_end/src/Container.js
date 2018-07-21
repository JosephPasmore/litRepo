import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Container extends Component {
  compponentDidMount() {
    console.log('Test');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Napcore</h1>
        </header>
      </div>
    );
  }
}

export default Container;
