import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { mount, shallow, render } from 'enzyme';
import nock from 'nock';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

describe('DropdownMenu', function() {
  let menuItemDiv = ".__react_bs_dd_menuItems";

  beforeEach(() => {

  });

  it('Basic DropdownMenu should mount', function() {
    const menu = mount(<DropdownMenu />);
    expect(menu).not.toBe.undefined;
  });

  it('DropdownMenu with userName specified should mount', function() {
    const menu = mount(<DropdownMenu userName="Test User" />);
    expect(menu).not.toBe.undefined;
  });

  it('DropdownMenu with child MenuItem should mount', function() {
    const menu = mount(
      <DropdownMenu>
        <MenuItem text="Click Me" location="/somewhere" />
      </DropdownMenu>
    );
    expect(menu).not.toBe.undefined;
  });

  it('Should render a username in the first row when the userName prop specified', () => {
    const userMenu = mount(<DropdownMenu userName="Test User" />);
    expect(userMenu.nodes[0].props.userName).toEqual("Test User");
  });

  it('Should not render a username in the first row when the userName prop is not specified', () => {
    const userMenu = mount(<DropdownMenu />);
    expect(userMenu.nodes[0].props.userName).toBe.undefined;
  });

  it('Should render child MenuItems', () => {
    const menu = shallow(
      <DropdownMenu>
        <MenuItem text="Click" location="/here" />
        <MenuItem text="Or" location="/here" />
      </DropdownMenu>
    );
    expect(menu.find(menuItemDiv).find('ul').children().length).toBe(2);
  });
});
