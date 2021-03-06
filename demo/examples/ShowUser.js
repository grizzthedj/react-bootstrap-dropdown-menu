import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class ShowUser extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Show Logged In User</h3>
        <p>Click the bootstrap gear icon below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <DropdownMenu userName="John Doe">
          <MenuItem text="Home" location="/showuser" />
          <MenuItem text="Edit Profile" location="/showuser" />
          <MenuItem text="Logout" location="/showuser" />
        </DropdownMenu>

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class ShowUser extends React.Component &#123;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu userName='John Doe'&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Home' location='/showuser' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Edit Profile' location='/showuser' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Logout' location='/showuser' /&gt;<br />
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

export default ShowUser;
