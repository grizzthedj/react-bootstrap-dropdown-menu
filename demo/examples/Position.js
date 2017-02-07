import React from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class Position extends React.Component {
  constructor() {
    super();
    this.changePosition = this.changePosition.bind(this);
    this.state = {
      position: 'right'
    }
  }

  changePosition(e) {
    e.preventDefault();
    this.setState({position: this.refs.position.value});
  }

  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Simple Dropdown Menu with adjustable drop position</h3>
        <p>Select a drop position, then click the bootstrap gear icon below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <table>
          <tbody>
          <tr>
            <td width="135">
              <label htmlFor="position">Drop position:</label>
              <select id="position" ref="position" onChange={this.changePosition}>
                <option value="right">Right</option>
                <option value="center">Center</option>
                <option value="left">Left</option>
              </select>
            </td>
            <td>
              <DropdownMenu position={this.state.position}>
                <MenuItem key="1" text="Home" location="/simple" />
                <MenuItem key="2" text="Edit Profile" location="/simple" />
                <MenuItem key="3" text="Logout" location="/simple" />
              </DropdownMenu>
            </td>
          </tr>
        </tbody>
        </table>
        <br />

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class Position extends React.Component &#123;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu position='right|center|left'&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem key='1' text='Home' location='/simple' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem key='2' text='Edit Profile' location='/simple' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem key='3' text='Logout' location='/simple' /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/DropdownMenu&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;)<br />
            &nbsp;&nbsp;&#125;<br />
          &#125;<br />
        </code></pre>

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Position;
