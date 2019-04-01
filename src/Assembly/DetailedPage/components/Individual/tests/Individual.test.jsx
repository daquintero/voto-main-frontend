// Test for IndividualPage Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import IndividualPage from '../Page';
import store from '../../../../../App/store';

describe('<IndividualPage />', () => {
  const initialState = store;
  const match = { params: { id: 1 }, path: '/' };

  it(' renders correctly without crashing', () => {
    const tree = renderer
      .create(<>
        <Provider store={initialState}>
          <BrowserRouter>
            <IndividualPage match={match} />
          </BrowserRouter>
        </Provider>
      </>)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
