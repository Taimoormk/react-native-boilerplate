// ########## Import Dependencies Here ##########
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// ########## Import Components Here ##########
import { Profile } from '../screens/profile';

test('renders Profile compomenent correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Profile />);
  const wrapper = renderer.getRenderOutput();
  expect(wrapper).toMatchSnapshot();
});
