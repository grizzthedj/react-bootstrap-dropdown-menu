import React from 'react';
import Renderer from 'react-test-renderer';
import DropdownMenu from '../src/DropdownMenu';
import MenuItem from '../src/MenuItem';

test('Type should be undefined by default', () => {
  const component = Renderer.create(
    <DropdownMenu userName="wkfbwief">
      <MenuItem text="Test Link" location="/somewhere" />
    </DropdownMenu>
  );
  console.log(component)
  let tree = component.toJSON();
  console.log(tree)
  expect(tree.props.userName).toBe(undefined);
});
