import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class ClickEvent extends React.Component {
  constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  deleteAccount(e) {
    e.preventDefault();
    if(confirm('Are you sure?')) {
      console.log('Bye bye!');
      return true;
    }
    return false;
  }

  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>MenuItem with OnClick Event</h3>
        <p>Click the bootstrap gear icon below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <DropdownMenu>
          <MenuItem text="Home" location="/clickevent" />
          <MenuItem text="Edit Profile" location="/clickevent" />
          <MenuItem text="Delete Account" onClick={this.deleteAccount} />
          <MenuItem text="Logout" location="/clickevent" />
        </DropdownMenu>

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class ClickEvent extends React.Component &#123;<br />
            &nbsp;&nbsp;constructor() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;super();<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.deleteAccount = this.deleteAccount.bind(this);<br />
            &nbsp;&nbsp;&#125;<br />
            <br />
            &nbsp;&nbsp;deleteAccount(e) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();<br />
            &nbsp;&nbsp;&nbsp;&nbsp;if(confirm('Are you sure?')) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Bye bye!');<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return false;<br />
            &nbsp;&nbsp;&#125;<br />
            <br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Home' location='/clickevent' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Edit Profile' location='/clickevent' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Delete Account' onClick=&#123;this.deleteAccount&#125; /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Logout' location='/clickevent' /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/DropdownMenu&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;)<br />
            &nbsp;&nbsp;&#125;<br />
          &#125;<br />
        </code></pre>
      </div>
    );
  }
}

export default ClickEvent;
