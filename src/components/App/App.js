// Libs
import React, { Component } from 'react';
import debounce from 'lodash/debounce';

// Containers
import CanvasContainer from 'containers/CanvasContainer';

// Components
import Menu from 'components/Menu';
import Toolbar from 'components/Toolbar';

// Utils
import { getInnerDimensions } from 'utils/sizing';

// CSS
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      canvasWidth: 0,
      canvasHeight: 0
    };

    this.handleResize = debounce(this.handleResize.bind(this), 150);
  }

  handleResize() {
    const { innerWidth, innerHeight } = getInnerDimensions(this.canvasContainerRef);
    this.setState({
      canvasHeight: innerHeight,
      canvasWidth: innerWidth
    });
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <main className="App">
        <Menu className="App-menu" />
        <section className="App-body">
          <Toolbar className="App-toolbar" />
          <div className="App-stage" ref={ node => { this.canvasContainerRef = node; } }>
            <CanvasContainer
              className="App-canvas"
              width={ this.state.canvasWidth }
              height={ this.state.canvasHeight }
            />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
