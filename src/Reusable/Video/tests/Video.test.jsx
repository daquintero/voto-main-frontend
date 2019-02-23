import React from 'react';
import renderer from 'react-test-renderer';
import Video from '../components/Video';

describe('<Video />', () => {
  it('Video renders correctly without crashing', () => {
    const tree = renderer
      .create(<Video />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
