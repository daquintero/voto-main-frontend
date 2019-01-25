import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Layout from './Layout';

it('Layout renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Layout renders correctly without crashing', () => {
  const tree = renderer
    .create(<Layout />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
