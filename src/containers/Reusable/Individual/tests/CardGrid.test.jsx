// Test for the Home Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import CardGrid from '../components/CardGrid';

describe('<CardGrid />', () => {
  it('HomePage renders correctly without crashing', () => {
    const tree = renderer
      .create(<CardGrid />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
