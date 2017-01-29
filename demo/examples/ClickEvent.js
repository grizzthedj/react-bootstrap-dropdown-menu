import React from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class ClickEvent extends React.Component {
  constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  deleteAccount(e) {
    if(confirm('Are you sure?')) {
      console.log('Bye bye!');
    }
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><h3>OnClick Event</h3></td>
              <td>
                <DropdownMenu>
                  <MenuItem key="1" text="Home" location="/" />
                  <MenuItem key="2" text="Edit Profile" location="/" />
                  <MenuItem key="3" text="Delete Account" onClick={this.deleteAccount} location="/" />
                  <MenuItem key="4" text="Logout" location="/" />
                </DropdownMenu>
              </td>
            </tr>
          </tbody>
        </table>
        <pre><code>
          &lt;DropdownMenu&gt;
            &lt;MenuItem key='1' text='Home' location='/' /&gt;
            &lt;MenuItem key='2' text='Edit Profile' location='/' /&gt;
            &lt;MenuItem key='3' text='Delete Account' onClick=&#123;this.deleteAccount&#125; location='/' /&gt;
            &lt;MenuItem key='4' text='Logout' location='/' /&gt;
          &lt;/DropdownMenu&gt;
        </code></pre>
      </div>
    );
  }
}

export default ClickEvent;
