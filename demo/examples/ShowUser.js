import React from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class ShowUser extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><h3>Show Logged In User</h3></td>
              <td>
                <DropdownMenu userName="John Doe">
                  <MenuItem key="1" text="Home" location="/" />
                  <MenuItem key="2" text="Edit Profile" location="/" />
                  <MenuItem key="3" text="Logout" location="/" />
                </DropdownMenu>
              </td>
            </tr>
          </tbody>
        </table>
        <pre><code>
          &lt;DropdownMenu userName='John Doe'&gt;
            &lt;MenuItem key='1' text='Home' location='/' /&gt;
            &lt;MenuItem key='2' text='Edit Profile' location='/' /&gt;
            &lt;MenuItem key='3' text='Logout' location='/' /&gt;
          &lt;/DropdownMenu&gt;
        </code></pre>
      </div>
    );
  }
}

export default ShowUser;
