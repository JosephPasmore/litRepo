import React, { Component } from 'react';
import Arrange from 'terra-arrange';
import Search from './Search';
import logo from '../logo.png';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Arrange
          fitStart={<img src={logo} className="App-logo" alt="logo" />}
          fill={<h1 className="App-title">NapCore</h1>}
          fitEnd={<Search searchForLocations={this.props.searchForLocations}/>}
          align="center"
        />
      </header>
    );
  }
}

export default Header;
