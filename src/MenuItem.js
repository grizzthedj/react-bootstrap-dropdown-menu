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

  render() {
    if (this.props.type) {
      if (this.props.type.toLowerCase() === 'separator') {
        return (<hr style={DefaultCss.separator} />)
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
