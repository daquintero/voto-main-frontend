// Test for InformativeSnippetPage Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import InformativeSnippetPage from '../INFPage';
import store from '../../../../../App/store';

describe('<InformativeSnippetPage />', () => {
  const initialState = store;
  const match = { params: { id: 1 } } ;

  it(' renders correctly without crashing', () => {
    const tree = renderer
      .create(<>
        <Provider store={initialState}>
          <InformativeSnippetPage match={match} />
        </Provider>
      </>)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
