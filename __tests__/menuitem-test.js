import React from 'react';
import { Link } from 'react-router';
import ReactTestUtils from 'react-dom/test-utils';
import { mount, shallow, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

configure({ 
  adapter: new Adapter()
});

describe('MenuItem', function() {
  beforeEach(() => {

  });

  it('Basic MenuItem should mount', function() {
    const menuItem = shallow(<MenuItem text="Profile" location="/profile" />);
    expect(menuItem).not.toBe.undefined;
  });

  it('Should allow click events', () => {
    const onLinkClick = function() {console.log('click')};
    const menuItem = shallow(
      <MenuItem onClick={onLinkClick} />
    );
    expect(menuItem.props().onClick);
  });

  it('Should ensure onClick is a fucntion', () => {
    const onLinkClick = function() {console.log('click')};
    const menuItem = shallow(
      <MenuItem onClick={onLinkClick} />
    );
    expect(typeof(menuItem.props().onClick) === "function");
  });

  it('MenuItem with invalid type specified should not mount', function() {
    expect(() => {
      shallow(<MenuItem type="foo" />);
    }).toThrow();
  });

  it('Should allow styling via linkStyle prop', () => {
    const css = {redBox: {color:'red'}};
    const menuItem = shallow(
      <MenuItem linkStyle={css.redBox} />
    );
    expect(menuItem.props().linkStyle);
  });
});
