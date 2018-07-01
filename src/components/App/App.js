// Libs
import React, { Component } from 'react';

// Components
import Canvas from 'components/Canvas';
import Menu from 'components/Menu';
import Toolbar from 'components/Toolbar';

// CSS
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
