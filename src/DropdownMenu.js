import React from 'react';
import Css from './Css';

const MENUITEMS_DIV = '__react_bs_dd_menuItems';
const TRIGGER_CLASS = '__react_bs_dd_trigger';

window.onclick = function(e) {
  const klass = e.target.className;

  if (klass !== MENUITEMS_DIV + " show" && klass !== TRIGGER_CLASS && !klass.startsWith("glyphicon", 0)) {
    var menuItemDiv = document.getElementById(MENUITEMS_DIV);

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
    const items = document.getElementById(MENUITEMS_DIV);
    if (items) {
      items.classList.toggle("show");
    }
  }

  showLoggedInUserName() {
    if (this.props.userName) {
      return (
        <div key="1">
          <p>Logged in as: <br /><strong>{this.props.userName}</strong></p>
          <hr width="100%" />
        </div>
      );
    }
  }

  getTrigger() {
    if (this.props.triggerType && this.props.trigger) {
      switch(this.props.triggerType.toLowerCase()) {
        case "image":
          return (
            <div key="1" onClick={this.toggleMenu}><img src={this.props.trigger} style={Css.imageTrigger} className={TRIGGER_CLASS} /></div>
          );
        case "text":
          return (
            <div key="1" className={TRIGGER_CLASS} onClick={this.toggleMenu} style={Css.textTrigger}>
              {this.props.trigger}
              <span className="glyphicon glyphicon-triangle-bottom" style={Css.triangle}></span>
            </div>
          );
        case "icon":
          return (
            <span key="1" className={this.props.trigger} style={Css.gear} onClick={this.toggleMenu}></span>
          );
        default:
          throw "triggerType is not supported. Try 'image' or 'text' or 'icon'.";
      }
    }
    else {
      return (
        <span key="1" className="glyphicon glyphicon-cog" style={Css.gear} onClick={this.toggleMenu}></span>
      );
    }
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
    trigger.push(this.getTrigger());
    var menuStyle = this.getMenuStyle();

    return (
      <div style={Css.menu}>
        {trigger}
        <div id={MENUITEMS_DIV} className={MENUITEMS_DIV} style={menuStyle}>
          {userItem}
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default DropdownMenu;
