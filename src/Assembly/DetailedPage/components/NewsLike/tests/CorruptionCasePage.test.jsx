// Test for CorruptionCasePage Page Component
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CorruptionCasePage from '../CCPage';
import store from '../../../../../App/store';

describe('<CorruptionCasePage />', () => {
  const initialState = store;
  const match = { params: { id: 1  }, path: '/'  };

  it(' renders correctly without crashing', () => {
    const tree = renderer
      .create(<>
        <Provider store={initialState}>
          <CorruptionCasePage match={match} />
        </Provider>
      </>)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });
});
