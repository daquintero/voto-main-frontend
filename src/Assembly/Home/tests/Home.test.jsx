// Test for thimport { Provider}e Home Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../index';
import store from '../../../App/store';

describe('<Home />', () => {
  const initialState = store;

  it(' renders correctly without crashing', () => {
    const tree = renderer
      .create(<>
        <Provider store={initialState}>
          <Home />
        </Provider>
        </>)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
