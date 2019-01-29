// Test for the Home Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/index';

describe('<Home />', () => {
  it('HomePage renders correctly without crashing', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
