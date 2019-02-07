import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Users from './components/users/Users';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Random title</p>
        <Users />
      </div>
    );
  }
}

export default App;
