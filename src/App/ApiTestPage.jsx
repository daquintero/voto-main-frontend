import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Page from '../Reusable/DEVELOPMENT-ONLY-Page/components/ModularPage/Page';
// ----- TO TEST API -----
/* Use Corruption NewsLike sample */

class TestApi extends PureComponent {
  static propTypes = {
    hi: PropTypes.string.isRequired,
  };
  // Do all the api calls you want here.

  // This tests the corruption page for the id=1
  render() {
    return (
      <>
        {console.log(this.props.hi)}
        <Page id={1} />
      </>
    );
  }
}

export default TestApi;

