import React, { Component } from 'react';
import classnames from 'classnames';
import './Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <aside className={ classnames('Toolbar', this.props.className) }>
        Toolbar
      </aside>
    );
  }
}

export default Toolbar;
