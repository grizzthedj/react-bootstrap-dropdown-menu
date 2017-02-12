import React from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class LinkStyle extends React.Component {
  render() {
    var Css = {
      red: {
        color: 'red'
      }
    }
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Edit Link Style</h3>
        <p>Click the bootstrap gear icon below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <DropdownMenu>
          <MenuItem text="Home" linkStyle={Css.red} location="/linkstyle" />
          <MenuItem text="Edit Profile" linkStyle={Css.red} location="/linkstyle" />
          <MenuItem text="Logout" linkStyle={Css.red} location="/linkstyle" />
        </DropdownMenu>

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class LinkStyle extends React.Component &#123;<br />
            &nbsp;&nbsp;var Css = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;red: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: 'red'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&#125;<br />
            <br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Home' location='/linkstyle' linkStyle=&#123;Css.red&#125; /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Edit Profile' location='/linkstyle' linkStyle=&#123;Css.red&#125; /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Logout' location='/linkstyle' linkStyle=&#123;Css.red&#125; /&gt;<br />
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

export default LinkStyle;
