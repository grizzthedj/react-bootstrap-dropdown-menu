import React from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';
import { Simple, ShowUser, LinkStyle, ClickEvent } from './examples/Index';

class App extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h2>react-bootstrap-dropdown-menu Examples</h2>
        <Simple />
        <ShowUser />
        <LinkStyle />
        <ClickEvent />
      </div>
    );
  }
}

export default App;
