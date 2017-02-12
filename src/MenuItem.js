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
    if (this.props.type) {
      if (this.props.type.toLowerCase() === 'separator') {
        return (<hr width='100%' />)
      }
      else {
        throw "Unknown type for MenuItem. The only supported type is 'separator'.";
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
