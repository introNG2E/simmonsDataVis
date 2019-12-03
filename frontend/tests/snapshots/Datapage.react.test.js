import React from 'react';
import Datapage from '../../src/pages/DataPage';
import renderer from 'react-test-renderer';

it('renders correctly with id passed to it', () => {
  const tree = renderer
    .create(<Datapage getId={'5de56e20ed26b55db0ba44c4'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without id passed to it', () => {
  const tree = renderer
    .create(<Datapage getId={''} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});