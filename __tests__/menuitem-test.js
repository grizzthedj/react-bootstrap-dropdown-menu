import React from 'react';
import { Link } from 'react-router';
import TestUtils from 'react-addons-test-utils';
import { mount, shallow, render } from 'enzyme';
import nock from 'nock';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

describe('MenuItem', function() {
  beforeEach(() => {

  });

  it('Basic MenuItem should mount', function() {
    const menuItem = mount(<MenuItem text="Profile" location="/profile" />);
    expect(menuItem).not.toBe.undefined;
  });

  it('Should allow click events', () => {
    const onLinkClick = function(){console.log('click')};
    const menuItem = mount(
      <MenuItem onClick={onLinkClick} />
    );
    expect(menuItem.props().onClick);
  });

  it('Should allow styling via linkStyle prop', () => {
    const css = {redBox: {color:'red'}};
    const menuItem = mount(
      <MenuItem linkStyle={css.redBox} />
    );
    expect(menuItem.props().linkStyle);
  });
});
