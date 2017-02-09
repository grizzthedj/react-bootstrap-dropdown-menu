# react-bootstrap-dropdown-menu

A simple Dropdown Menu for React. Commonly used as a 'User Settings' menu on websites where users login.

## Installation

```js
npm install react-bootstrap-dropdown-menu --save
```
Include bootstrap in your project(if not already included)
```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" media="all">
```

## Usage

A simple example using OnClick events. Download and run the demo for more examples, or browse the examples [here]( http://grizzthedj.github.io/react-bootstrap-dropdown-menu/demo/public)

![alt tag](https://cloud.githubusercontent.com/assets/9720835/22619923/7ddd5d42-eacd-11e6-9bda-ee9be66cb64b.png)

```js
import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

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
      <DropdownMenu userName="Chris Smith">
        <MenuItem key="1" text="Home" location="/home" />
        <MenuItem key="2" text="Edit Profile" location="/profile" />
        <MenuItem key="3" text="Change Password" location="/change-password" />
        <MenuItem key="4" text="Privacy Settings" location="/privacy-settings" />
        <MenuItem key="5" text="Delete Account" onClick={this.deleteAccount} />
        <MenuItem key="6" text="Logout" onClick={this.logout} />
      </DropdownMenu>
    );
  }
}

export default SettingsMenu;
```
## DropdownMenu props
| Name         | Type     | Default                 | Possible Values              | Description     |
| ------------ | -------- | ----------------------- | ---------------------------- | --------------- |
| userName     | String   | undefined               | Any string(e.g. 'John Doe')  | When provided, will render 'Logged in as: {userName}' in the top MenuItem |
| position     | String   | right                   | left, center, right          | Changes the menu's horizontal drop position relative to the trigger |
| triggerType  | String   | icon                    | icon, text, image            | The Type of drop trigger |
| trigger      | String   | glyphicon glyphicon-cog | Depends on triggerType       | For <b>'icon'</b> triggerType: Any bootstrap glyphicon(http://getbootstrap.com/components/)<br />For <b>'text'</b> triggerType: Any String can be used<br />For <b>'image'</b> triggerType: Path to image(e.g. "/images/myimage.png") |

## MenuItem props
| Name         | Type     | Default                 | Possible Values              | Description     |
| ------------ | -------- | ----------------------- | ---------------------------- | --------------- |
| key          | Number   | undefined               | Any integer value            | Must be unique for each MenuItem |
| text         | String   | undefined               | Any String value             | Text value of the Link in the MenuItem |
| location     | String   | undefined               | Any String value             | An absolute or relative path |
| linkStyle    | Object   | inherited               | Hash containing javascript styles(not CSS). See [examples]( http://grizzthedj.github.io/react-bootstrap-dropdown-menu/demo/public) for more info |  
| onClick      | Function | undefined               | A Function                   | A function that will fire when the MenuItem Link is clicked |    

## Download Examples

```js
git clone https://github.com/grizzthedj/react-bootstrap-dropdown-menu.git
cd react-bootstrap-dropdown-menu
npm install
gulp demo
Browse http://localhost:8080
```

## Backlog

* More Error handling.
* Handle MenuItem keys internally so that they don't have to be specified.
* Extend CSS styling so that user defined styles can be passed in as props.

## Known Bugs

* Having 2(or more) instances on same page will cause the second, and all subsequent instances to not collapse when clicking outside of the menu. This is not an issue when there is only a single instance.
