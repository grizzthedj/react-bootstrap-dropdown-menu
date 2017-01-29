# react-dropdown-menu

A simple Dropdown Menu for React. Commonly used as a 'User Settings' menu on websites where users login.

## Installation

```js
npm install react-dropdown-menu --save
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

```js
git clone <GIT_URL>
cd react-dropdown-menu
npm install
gulp demo
Browse http://localhost:8080
```

## Documentation

## Backlog

* Implement a trigger that can be text or an image and passed in via props.
* Extend CSS styling so that user defined styles can be passed as props(to both parent and child).

## Known Bugs

* Having 2(or more) instances on same page will cause the second, and all subsequent instances to not collapse when clicking outside of the menu. This is not an issue when there is only a single instance.
