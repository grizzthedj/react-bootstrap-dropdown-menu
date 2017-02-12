import React from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class TextTrigger extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Dropdown Menu with Text Trigger</h3>
        <p>Click the "Settings" below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <DropdownMenu triggerType="text" trigger="Settings">
          <MenuItem text="Home" location="/texttrigger" />
          <MenuItem text="Edit Profile" location="/texttrigger" />
          <MenuItem text="Logout" location="/texttrigger" />
        </DropdownMenu>

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class Simple extends React.Component &#123;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu triggerType='text' trigger='Settings'&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Home' location='/texttrigger' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Edit Profile' location='/texttrigger' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Logout' location='/texttrigger' /&gt;<br />
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

export default TextTrigger;
