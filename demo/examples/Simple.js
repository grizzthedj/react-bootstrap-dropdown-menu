import React from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class Simple extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><h3>Simple</h3></td>
              <td>
                <DropdownMenu>
                  <MenuItem key="1" text="Home" location="/" />
                  <MenuItem key="2" text="Edit Profile" location="/" />
                  <MenuItem key="3" text="Logout" location="/" />
                </DropdownMenu>
              </td>
            </tr>
          </tbody>
        </table>
        <pre><code>
          &lt;DropdownMenu&gt;
            &lt;MenuItem key='1' text='Home' location='/' /&gt;
            &lt;MenuItem key='2' text='Edit Profile' location='/' /&gt;
            &lt;MenuItem key='3' text='Logout' location='/' /&gt;
          &lt;/DropdownMenu&gt;
        </code></pre>
      </div>
    );
  }
}

export default Simple;
