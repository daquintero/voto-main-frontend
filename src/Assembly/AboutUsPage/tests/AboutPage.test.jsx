// Test for AboutPage Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import AboutPage from '../index';
import store from '../../../App/store';

describe('<AboutPage />', () => {
  const initialState = store;
  const match = { params: { id: 1 } } ;

  it(' renders correctly without crashing', () => {
    const tree = renderer
      .create(<>
        <Provider store={initialState}>
          <AboutPage match={match} />
        </Provider>
      </>)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
