// Test for OrganizationPage Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import OrganizationPage from '../Page';
import store from '../../../../../App/store';

describe('<OrganizationPage />', () => {
  const initialState = store;
  const match = { params: { id: 1 } } ;

  it(' renders correctly without crashing', () => {
    const tree = renderer
      .create(<>
        <Provider store={initialState}>
          <OrganizationPage match={match} />
        </Provider>
      </>)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
