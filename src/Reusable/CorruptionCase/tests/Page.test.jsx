// Test for the Card
import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../../DEVELOPMENT-ONLY-Page/components/ModularPage/Page';

describe('<NewsLike />', () => {
  it('Full NewsLike renders correctly without crashing', () => {
    const tree = renderer
      .create(<Page />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
