import React from 'react';
import { Link } from 'react-router';
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
    return (
      <li>
        <Link onClick={this.props.onClick} to={this.props.location}
          style={this.state.linkStyle}>{this.props.text}
        </Link>
      </li>
    );
  }
};

export default MenuItem;
