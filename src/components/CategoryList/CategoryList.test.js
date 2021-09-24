import React from 'react';
import renderer from 'react-test-renderer';
import CategoryList from './CategoryList';

it('renders CategoryList correctly when there are no items', () => {
  const tree = renderer.create(<CategoryList />).toJSON();
  expect(tree).toMatchSnapshot();
});

