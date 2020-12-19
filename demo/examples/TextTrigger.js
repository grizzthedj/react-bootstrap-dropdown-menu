import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../../src/DropdownMenu';
import MenuItem from '../../src/MenuItem';

class TextTrigger extends React.Component {
  constructor() {
    super();
    this.state = {
      css: {
        textTrigger: {
          fontWeight: 'normal'
        }
      }
    }
    this.onMouseover = this.onMouseover.bind(this);
    this.onMouseout = this.onMouseout.bind(this);
  }

  onMouseover(event) {
    event.preventDefault();
    this.setState({
      css: {
        textTrigger: {
          fontWeight: 'bold'
        }
      }
    });
  }

  onMouseout(event) {
    event.preventDefault();
    this.setState({
      css: {
        textTrigger: {
          fontWeight: 'normal'
        }
      }
    });
  }

  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h3>Dropdown Menu with Text Trigger and mouse events</h3>
        <p>Click the "Settings" below to show the dropdown menu. &nbsp;<Link to="/">Back</Link></p>

        <DropdownMenu css={this.state.css} onMouseover={this.onMouseover} onMouseout={this.onMouseout} triggerType="text" trigger="Settings">
          <MenuItem text="Home" location="/texttrigger" />
          <MenuItem text="Edit Profile" location="/texttrigger" />
          <MenuItem text="Logout" location="/texttrigger" />
        </DropdownMenu>

        <pre><code>
          import React from 'react';<br />
          import &#123; DropdownMenu, MenuItem &#125; from 'react-bootstrap-dropdown-menu';<br />
          <br />
          class Simple extends React.Component &#123;<br />
            &nbsp;&nbsp;constructor() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;super();<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;css: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textTrigger: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontWeight: 'normal'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.onMouseover = this.onMouseover.bind(this);<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.onMouseout = this.onMouseout.bind(this);<br />
            &nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;onMouseover(event) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;event.preventDefault();<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;css: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textTrigger: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontWeight: 'bold'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
            &nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;onMouseout(event) &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;event.preventDefault();<br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;css: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;textTrigger: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontWeight: 'normal'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
            &nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DropdownMenu css=&#123;this.state.css&#125; onMouseover=&#123;this.onMouseover&#125; onMouseout=&#123;this.onMouseout&#125; triggerType='text' trigger='Settings'&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Home' location='/texttrigger' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Edit Profile' location='/texttrigger' /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MenuItem text='Logout' location='/texttrigger' /&gt;<br />
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

export default TextTrigger;
