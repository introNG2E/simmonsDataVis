import React from 'react';
import Homepage from '../../src/pages/Homepage';
import renderer from 'react-test-renderer';

it('renders correctly with id passed to it', async () => {
  const tree = renderer
    .create(<Homepage getId={'5de56e20ed26b55db0ba44c4'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without id passed to it', async () => {
  const tree = renderer
    .create(<Homepage getId={''} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});