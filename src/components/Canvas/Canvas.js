// Libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Components
import toolFactory from 'tools/toolFactory';

// CSS
import './Canvas.css';

class Canvas extends Component {

  static propTypes = {
    activeColor: PropTypes.object,
    activeTool: PropTypes.string
  }

  state = {
    isMouseClicked: false
  }

  constructor() {
    super();
    this.delegateMouseDown = this.delegateMouseDown.bind(this);
    this.delegateMouseMove = this.delegateMouseMove.bind(this);
    this.delegateMouseUp = this.delegateMouseUp.bind(this);
    this.isMouseClicked = this.isMouseClicked.bind(this);
  }

  delegateMouseDown(e) {
    const { activeColor, activeTool } = this.props;
    const point = this.getRelativeOffest(e);
    this.setState({
      isMouseClicked: true
    }, () => {
      toolFactory.getTool(activeTool).handleMouseDown(this, activeColor, point);
    });
  }

  delegateMouseMove(e) {
    const { activeColor, activeTool } = this.props;
    const point = this.getRelativeOffest(e);
    toolFactory.getTool(activeTool).handleMouseMove(this, activeColor, point);
  }

  delegateMouseUp(e) {
    const { activeColor, activeTool } = this.props;
    const point = this.getRelativeOffest(e);
    this.setState({
      isMouseClicked: false
    }, () => {
      toolFactory.getTool(activeTool).handleMouseUp(this, activeColor, point);
    });
  }

  drawPixel(x, y, { r, g, b, a }) {
    this.context2d.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    this.context2d.fillRect(x, y, 1, 1);
  }

  getRelativeOffest(e) {
    const { clientX, clientY, target } = e;
    const { left, top } = target.getBoundingClientRect();
    return {
      x: clientX - left,
      y: clientY - top
    };
  }

  isMouseClicked() {
    return this.state.isMouseClicked;
  }

  // React lifecycle
  // ---------------

  componentDidMount() {
    this.canvasRef.width = this.props.width;
    this.canvasRef.height = this.props.height;
    this.context2d = this.canvasRef.getContext('2d');
  }

  render() {
    return (
      <canvas
        ref={ node => { this.canvasRef = node; } }
        className={ classnames('Canvas', this.props.className) }
        onMouseDown={ this.delegateMouseDown }
        onMouseMove={ this.delegateMouseMove }
        onMouseUp={ this.delegateMouseUp }
      />
    );
  }
}

export default Canvas;
