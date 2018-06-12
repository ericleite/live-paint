import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas width={ 100 } height={ 100 } />
      </div>
    );
  }
}

export default App;
