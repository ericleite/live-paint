import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component {

  constructor(props) {
    super(props);
    // TODO: Make properties read-only
    this.width = props.width;
    this.height = props.height;
    this.initializeGrid(props.width, props.height);
  }

  initializeGrid(width, height) {
    const grid = new Array(width);
    grid.fill(new Array(height));
    grid.map(row => row.fill('#ffffff'));
    this.grid = grid;
  }

  componentDidMount() {
    this.canvasRef.width = this.width;
    this.canvasRef.height = this.height;
    this.context = this.canvasRef.getContext('2d');
  }

  render() {
    return (
      <canvas
        ref={ node => { this.canvasRef = node } }
        style={ { backgroundColor: '#f5f4f0' } }
      />
    );
  }
}

export default Canvas;
