// Test for the Home CorruptionCase Component
import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../components/Card';

describe('<Card />', () => {
  it('HomePage renders correctly without crashing', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
