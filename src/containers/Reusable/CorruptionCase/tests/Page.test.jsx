// Test for the Card
import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../components/Page/Page';

describe('<Page />', () => {
  it('Full Page renders correctly without crashing', () => {
    const tree = renderer
      .create(<Page />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
