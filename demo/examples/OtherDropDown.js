import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class OtherDropDown extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Plays nicely with other Dropdown Menus</h3>
        <p>Click the bootstrap gear icon below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <DropdownMenu>
          <MenuItem text="Home" location="/simple" />
          <MenuItem text="Edit Profile" location="/simple" />
          <MenuItem text="Logout" location="/simple" />
        </DropdownMenu>

        <select id="otherdd">
          <option value="-1">Select something ...</option>
          <option value="1">Home</option>
          <option value="2">Edit Profile</option>
          <option value="3">Logout</option>
        </select> 

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class OtherDropDown extends React.Component &#123;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Home' location='/simple' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Edit Profile' location='/simple' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Logout' location='/simple' /&gt;<br />
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

export default OtherDropDown;
