import React from 'react';
import Css from './Css';

class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = {
      linkStyle: Css.pointer
    }
  }

  componentWillMount() {
    if(this.props.linkStyle) {
      this.setState({linkStyle: this.props.linkStyle})
    }
  }

  render() {
    if (this.props.type && this.props.type.toLowerCase() === 'separator') {
      return (<li><hr width='100%' /></li>)
    }
    else {
      return (
        <li>
          <a href={this.props.location} onClick={this.props.onClick}
            style={this.state.linkStyle}>{this.props.text}
          </a><br />
        </li>
      )
    }
  }
};

export default MenuItem;
