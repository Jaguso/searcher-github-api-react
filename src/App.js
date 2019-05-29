import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Routes/>
      </div>
    );
  }
}

export default App;
