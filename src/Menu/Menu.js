import React, { Component } from 'react';
import classnames from 'classnames';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <nav className={ classnames('Menu', this.props.className) }>
        Menu
      </nav>
    );
  }
}

export default Menu;
