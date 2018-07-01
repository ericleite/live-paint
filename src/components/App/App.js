import React, { Component } from 'react';
import Canvas from '../Canvas/Canvas';
import Menu from '../Menu/Menu';
import Toolbar from '../Toolbar/Toolbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Menu className="App-menu" />
        <section className="App-body">
          <Toolbar className="App-toolbar" />
          <Canvas className="App-canvas" width={ 100 } height={ 100 } />
        </section>
      </main>
    );
  }
}

export default App;
