import React from 'react';
import { Link, browserHistory } from 'react-router';
import MenuItem from './MenuItem';
import Css from './Css';

function hideMenu() {
  document.getElementById('__react_bs_dd_menuItems').classList.remove('show');
};

window.onclick = function(e) {
  if (e.target.className !== "__react_bs_dd_menuItems show" && e.target.className !== "glyphicon glyphicon-cog fa-lg") {
    var menuItemDiv = document.getElementById('__react_bs_dd_menuItems');

    if (menuItemDiv) {
      menuItemDiv.classList.remove('show');
    }
  }
};

class DropdownMenu extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    if (this.refs.__react_bs_dd_menuItems) {
      this.refs.__react_bs_dd_menuItems.classList.toggle("show");
    }
  }

  render() {
    const userItem = [];

    if (this.props.userName) {
      userItem.push(
        <li key="-1">
          <p>Logged in as: <br /><strong>{this.props.userName}</strong></p>
          <hr width="100%" />
        </li>
      );
    }

    return (
      <div style={Css.menu}>
        <span className="glyphicon glyphicon-cog fa-lg" style={Css.gear} onClick={this.toggleMenu}></span>
        <div id="__react_bs_dd_menuItems" ref="__react_bs_dd_menuItems" className="__react_bs_dd_menuItems" style={Css.menuContent}>
          <ul style={Css.bareBones}>
            {userItem}
            {this.props.children}
          </ul>
        </div>
      </div>
    );
  }
};

export default DropdownMenu;
