import React from 'react';
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
    const items = document.getElementById('__react_bs_dd_menuItems');
    if (items) {
      items.classList.toggle("show");
    }
  }

  showLoggedInUserName() {
    if (this.props.userName) {
      return (
        <li key="-1">
          <p>Logged in as: <br /><strong>{this.props.userName}</strong></p>
          <hr width="100%" />
        </li>
      );
    }
  }

  getTrigger(triggerStyle) {
    return (
      <span key="1" className="glyphicon glyphicon-cog fa-lg" style={triggerStyle} onClick={this.toggleMenu}></span>
    );
  }

  getMenuStyle() {
    // Clone the current style
    var menuStyle = (JSON.parse(JSON.stringify(Css.menuContent)));

    if (this.props.position) {
      var baseWidth = parseInt(Css.menuContent.minWidth.replace('px',''));
      var offset = 0;
      baseWidth = baseWidth - 40;

      // We need to use negative numbers as we are offsetting menu to the left
      if (this.props.position === "center") {
        offset = (baseWidth / 2) * -1;
      }
      if (this.props.position === "left") {
        offset = baseWidth * -1;
      }

      menuStyle.left = offset.toString() + 'px';
    }

    return menuStyle;
  }

  render() {
    const userItem = [], trigger = [];

    userItem.push(this.showLoggedInUserName());
    trigger.push(this.getTrigger(Css.gear));
    var menuStyle = this.getMenuStyle();

    return (
      <div style={Css.menu}>
        {trigger}
        <div id="__react_bs_dd_menuItems" className="__react_bs_dd_menuItems" style={menuStyle}>
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
