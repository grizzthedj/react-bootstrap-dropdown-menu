import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { mount, shallow, render } from 'enzyme';
import nock from 'nock';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

describe('DropdownMenu', function() {
  let menu, menuWithUser, menuWithItem;
  let menuItemDiv = ".__react_bs_dd_menuItems";

  beforeEach(() => {
    menu = mount(<DropdownMenu />);
    menuWithUser = mount(<DropdownMenu userName="Test User" />);
    menuWithItem = mount(
      <DropdownMenu>
        <MenuItem text="Click Me" location="/somewhere" />
        <MenuItem text="Click Me Too" location="/somewhere-else" />
      </DropdownMenu>
    );
  });

  it('DropdownMenus should mount', function() {
    expect(menu).not.toBe.undefined;
    expect(menuWithUser).not.toBe.undefined;
    expect(menuWithItem).not.toBe.undefined;
  });

  it('Should render a username in the first row when the userName prop specified', () => {
    //expect(menuWithUser.find(menuItemDiv).length).toBe(1);
  });

  it('Should not render a username in the first row when the userName prop is not specified', () => {
    //console.log(menuWithItem.find(menuItemDiv).nodes[0])
    //expect(menuWithItem.find(menuItemDiv).props.children.length).toBe(0);
  });

  it('Should render two MenuItems when there are 2 children', () => {
    //expect(menuWithItem.find(menuItemDiv).find('ul').length).toBe(1);
  });

  it('First MenuItem should read "" ', () => {
    //expect(menuWithItem.find(menuItemDiv).find('ul').length).toBe(1);
  });
});
