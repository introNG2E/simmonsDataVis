import React from 'react';
import EmailEntry from '../../src/pages/EmailEntry';
import renderer from 'react-test-renderer';

it('renders correctly when accessed', () => {
  const tree = renderer
    .create(<EmailEntry/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});