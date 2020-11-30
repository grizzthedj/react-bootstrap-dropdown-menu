import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class ImageTrigger extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Dropdown Menu with Image Trigger</h3>
        <p>Click the image below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <DropdownMenu triggerType="image" trigger="../images/trigger.png" triggerWidth="50px" triggerHeight="50px" caratColor="#FF0000">
          <MenuItem text="Home" location="/imagetrigger" />
          <MenuItem text="Edit Profile" location="/imagetrigger" />
          <MenuItem text="Logout" location="/imagetrigger" />
        </DropdownMenu>

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class ImageTrigger extends React.Component &#123;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu triggerType='image' trigger='../images/trigger.png' triggerWidth='55px' triggerHeight='55px' caratColor='#FF0000'&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Home' location='/imagetrigger' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Edit Profile' location='/imagetrigger' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Logout' location='/imagetrigger' /&gt;<br />
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

export default ImageTrigger;
