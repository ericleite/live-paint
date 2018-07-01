import React, { Component } from 'react';
import classnames from 'classnames';
import { getColorIndicesForCoord } from '../../utils/drawingUtils';
import './Canvas.css';

class Canvas extends Component {

  constructor(props) {
    super(props);
    // TODO: Make properties read-only using Symbol
    this.width = props.width;
    this.height = props.height;
  }

  componentDidMount() {
    this.canvasRef.width = this.width;
    this.canvasRef.height = this.height;
    this.context2d = this.canvasRef.getContext('2d');
  }

  drawPixel(x, y, { r, g, b, a }) {
    this.context2d.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    this.context2d.fillRect(x, y, 1, 1);
  }

  render() {
    return (
      <canvas
        ref={ node => { this.canvasRef = node } }
        className={ classnames('Canvas', this.props.className) }
      />
    );
  }
}

window.Canvas = Canvas;

export default Canvas;
