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
      <div>
        <table>
          <tbody>
            <tr>
              <td><h3>Add Link Style</h3></td>
              <td>
                <DropdownMenu>
                  <MenuItem key="1" text="Home" linkStyle={Css.red} location="/" />
                  <MenuItem key="2" text="Edit Profile" linkStyle={Css.red} location="/" />
                  <MenuItem key="3" text="Logout" linkStyle={Css.red} location="/" />
                </DropdownMenu>
              </td>
            </tr>
          </tbody>
        </table>
        <pre><code>
          &lt;DropdownMenu&gt;
            &lt;MenuItem key='1' text='Home' linkStyle=&#123;Css.red&#125; location='/' /&gt;
            &lt;MenuItem key='2' text='Edit Profile' linkStyle=&#123;Css.red&#125; location='/' /&gt;
            &lt;MenuItem key='3' text='Logout' linkStyle=&#123;Css.red&#125; location='/' /&gt;
          &lt;/DropdownMenu&gt;
        </code></pre>
      </div>
    );
  }
}

export default LinkStyle;
