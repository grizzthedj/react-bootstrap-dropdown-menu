import React from 'react';
import Css from './Css';

const MENUITEMS_DIV = '__react_bs_dd_menuItems';
const TRIGGER_CLASS = '__react_bs_dd_trigger';

window.addEventListener("click", function(e) {
  const klass = e.target.className;

  if (klass !== MENUITEMS_DIV + " show" && klass !== TRIGGER_CLASS && !klass.lastIndexOf("glyphicon", 0) == 0) {
    var menuItemDiv = document.getElementById(MENUITEMS_DIV);

    if (menuItemDiv) {
      menuItemDiv.classList.remove('show');
    }
  }
});

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
        <div>
          <p>Logged in as: <br /><strong>{this.props.userName}</strong></p>
          <hr style={Css.separator} />
        </div>
      );
    }
  }

  getTrigger() {
    if (this.props.triggerType && this.props.trigger) {
      switch(this.props.triggerType.toLowerCase()) {
        case "image":
          var triggerStyle = Css.imageTrigger;
          var caratStyle = Css.triangle;

          if (this.props.triggerWidth) { triggerStyle.width = this.props.triggerWidth; }
          if (this.props.triggerHeight) { triggerStyle.height = this.props.triggerHeight; }
          if (this.props.caratColor) { caratStyle.color = this.props.caratColor; }

          return (
            <div onClick={this.toggleMenu}><img src={this.props.trigger} style={triggerStyle} className={TRIGGER_CLASS} />
              <span className="glyphicon glyphicon-triangle-bottom" style={caratStyle}></span>
            </div>
          );
        case "text":
          return (
            <div className={TRIGGER_CLASS} onClick={this.toggleMenu} style={Css.textTrigger}>
              {this.props.trigger}
              <span className="glyphicon glyphicon-triangle-bottom" style={caratStyle}></span>
            </div>
          );
        case "icon":
          return (
            <span className={this.props.trigger} style={Css.gear} onClick={this.toggleMenu}></span>
          );
        default:
          throw "The value for DropdownMenu 'triggerType' is not supported for DropdownMenu. Try 'image', 'text' or 'icon'.";
      }
    }
    else {
      return (
        <span className="glyphicon glyphicon-cog" style={Css.gear} onClick={this.toggleMenu}></span>
      );
    }
  }

  getMenuStyle() {
    const menuStyle = (JSON.parse(JSON.stringify(Css.menuContent))); // Clone the current style
    const position = this.props.position === undefined ? 'right' : this.props.position;
    const supportedPositions = ['left', 'center', 'right'];

    if (supportedPositions.indexOf(position.toLowerCase()) === -1) {
      throw "The value for 'position' prop is not supported for DropdownMenu. Try 'left', 'center' or 'right'.";
    }

    if (position) {
      var baseWidth = parseInt(Css.menuContent.minWidth.replace('px',''));
      var offset = 0;
      baseWidth = baseWidth - 40;

      // We need to use negative numbers as we are offsetting menu to the left
      if (position === "center") {
        offset = (baseWidth / 2) * -1;
      }
      if (position === "left") {
        offset = baseWidth * -1;
      }

      menuStyle.left = offset.toString() + 'px';
    }

    return menuStyle;
  }

  render() {
    if (this.props.children.length === 0) {
      throw "DropdownMenu must have at least one MenuItem child."
    }
    return (
      <div style={Css.menu}>
        {this.getTrigger()}
        <div id={MENUITEMS_DIV} className={MENUITEMS_DIV} style={this.getMenuStyle()}>
          {this.showLoggedInUserName()}
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default DropdownMenu;
