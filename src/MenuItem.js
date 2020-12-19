import React from 'react';
import DefaultCss from './Css';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    let linkStyle = DefaultCss.pointer;

    if (this.props.disabled) {
      if (this.props.disabled === "true") {
        linkStyle = DefaultCss.disabledItem;
      }
      else if (this.props.disabled !== "false") {
        throw "The value for prop 'disabled' is not supported for MenuItem. Must be true or false.";
      }
    }

    this.state = {
      linkStyle: linkStyle
    }
  }

  UNSAFE_componentWillMount() {
    if(this.props.linkStyle) {
      this.setState({linkStyle: this.props.linkStyle})
    }
  }

  getCss() {
    var propsCss = {...this.props.css};
    var css = {...DefaultCss};

    if (propsCss) {
      css['separator'] = {...DefaultCss['separator'], ...propsCss['separator']}
    }

    return css;
  }

  render() {
    if (this.props.type) {
      if (this.props.type.toLowerCase() === 'separator') {
        const css = this.getCss();
        return (<hr style={css.separator} />)
      }
      else {
        throw "The value for prop 'type' is not supported for MenuItem. The only supported type is 'separator'.";
      }
    }
    else {
      return (
        <div>
          <a href={this.props.location} onClick={this.props.onClick}
            style={this.state.linkStyle}>{this.props.text}
          </a><br />
        </div>
      )
    }
  }
};

export default MenuItem;
