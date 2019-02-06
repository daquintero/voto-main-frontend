// Test for the Card
import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../components/Card';

describe('<Card />', () => {
  it('Card renders correctly without crashing', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
