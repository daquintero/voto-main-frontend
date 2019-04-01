// Test for InformativeSnippetPage Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import InformativeSnippetPage from '../INFPage';
import store from '../../../../../App/store';
import { StaticRouter } from 'react-router';

describe('<InformativeSnippetPage />', () => {
  const initialState = store;
  const match = { params: { id: 1 }, path: '/' };

  it(' renders correctly without crashing', () => {
    const tree = renderer
      .create(<>
        <StaticRouter>
          <Provider store={initialState}>
            <InformativeSnippetPage match={match} />
          </Provider>
        </StaticRouter>
      </>)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
