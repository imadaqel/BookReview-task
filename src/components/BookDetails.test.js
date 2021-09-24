import React from 'react';
import renderer from 'react-test-renderer';
import BookDetails from './BookDetails';
it('renders correctly when there are no items', () => {
  // const match={match:{
  //   params:{
  //     id: '1'
  //   }
  // }}
  const tree = renderer.create(<BookDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});