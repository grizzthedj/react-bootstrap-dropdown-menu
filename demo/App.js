import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';
import {
  Home, Simple, IconColor, ShowUser, LinkStyle, ClickEvent, Multiple, FadeIn, CssOverride,
  OtherDropDown, Separator, Position, ImageTrigger, TextTrigger, IconTrigger, DisabledItem
} from './examples/Index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simple" component={Simple} />
          <Route path="/iconcolor" component={IconColor} />
          <Route path="/showuser" component={ShowUser} />
          <Route path="/linkstyle" component={LinkStyle} />
          <Route path="/clickevent" component={ClickEvent} />
          <Route path="/disabled" component={DisabledItem} />
          <Route path="/separator" component={Separator} />
          <Route path="/position" component={Position} />
          <Route path="/imagetrigger" component={ImageTrigger} />
          <Route path="/texttrigger" component={TextTrigger} />
          <Route path="/icontrigger" component={IconTrigger} />
          <Route path="/fadein" component={FadeIn} />
          <Route path="/cssoverride" component={CssOverride} />
          <Route path="/multiple" component={Multiple} />
          <Route path="/otherdropdown" component={OtherDropDown} />
        </Switch>
      </div>
    );
  }
}

export default App;
