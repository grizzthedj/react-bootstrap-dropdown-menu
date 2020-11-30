import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h2>react-bootstrap-dropdown-menu</h2>
        <h3><strong>Examples</strong></h3>
        <p>Click the links below to see the examples in action.</p>
        <ul>
          <li><Link to="/simple">Simple Dropdown Menu</Link></li>
          <li><Link to="/iconcolor">Dropdown Menu colored Icon Trigger</Link></li>
          <li><Link to="/separator">Dropdown Menu with Separator</Link></li>
          <li><Link to="/showuser">Show Logged In User</Link></li>
          <li><Link to="/fadein">Dropdown Menu with Fade In effect</Link></li>
          <li><Link to="/linkstyle">Edit Link Style</Link></li>
          <li><Link to="/clickevent">MenuItem with OnClick Event</Link></li>
          <li><Link to="/disabled">With disabled MenuItem</Link></li>
          <li><Link to="/position">Change Drop Position</Link></li>
          <li><Link to="/imagetrigger">Image Trigger</Link></li>
          <li><Link to="/texttrigger">Text Trigger</Link></li>
          <li><Link to="/icontrigger">Bootstrap Icon Trigger</Link></li>
          <li><Link to="/multiple">Multiple Instances</Link></li>
          <li><Link to="/otherdropdown">Plays nicely with other dropdowns</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
