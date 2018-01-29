import React, { Component } from 'react';

import { Register } from './screens/Register/index'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Register />
      </div>
    );
  }
}

export default App;
