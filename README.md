# react-bootstrap-dropdown-menu

A simple Dropdown Menu for React. Commonly used as a 'User Settings' menu on websites where users login.

## Installation

```js
npm install react-bootstrap-dropdown-menu --save
```

## Usage

```js
import React from 'react';
import DropdownMenu from 'react-bootstrap-dropdown-menu';

class SettingsMenu extends React.Component {
  constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
    this.logout = this.logout.bind(this);
  }

  deleteAccount(e) {
    console.log("Deleting Account")
  }

  logout(e) {
    console.log("Logging out")
  }

  render() {
    return (
      <DropdownMenu userName="Foo Bar">
        <MenuItem key="1" text="Home" location="/home" />
        <MenuItem key="2" text="Edit Profile" location="/profile" />
        <MenuItem key="3" text="Change Password" location="/change-password" />
        <MenuItem key="4" text="Delete Account" onClick={this.deleteAccount} />
        <MenuItem key="5" text="Logout" onClick={this.logout} />
      </DropdownMenu>
    );
  }
}

export default SettingsMenu;
```
## Download Examples


## Documentation


## Known Bugs
