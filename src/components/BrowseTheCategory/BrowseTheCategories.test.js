import React from 'react';
import renderer from 'react-test-renderer';
import BrowseTheCategories from './BrowseTheCategories';

it('renders BrowseTheCategories correctly when there are no items', () => {
  const tree = renderer.create(<BrowseTheCategories />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders BrowseTheCategories correctly when there are multiple items', () => {
  
    var categories = [
      {
        "id": 1,
        "image": "/categorayImages/category1.png",
        "title": "Aenean",
        "description": "Mauris sollicitudin fermentum libero. Phasellus viverra nulla ut metus varius laoreet."
      }]
  const tree = renderer.create(<BrowseTheCategories categories={categories} />).toJSON();
  expect(tree).toMatchSnapshot();
});