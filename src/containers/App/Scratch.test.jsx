import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Scratch from './Scratch';

it('Scratch renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scratch />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Scratch renders correctly without crashing', () => {
  const tree = renderer
    .create(<Scratch />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
