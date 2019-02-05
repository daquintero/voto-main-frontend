// Test for the Main Card Component
import React from 'react';
import renderer from 'react-test-renderer';
import MainCard from '../components/CommonCard';

describe('<MainCard />', () => {
  it('renders correctly without crashing', () => {
    const tree = renderer
      .create(<MainCard />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
