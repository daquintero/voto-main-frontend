// Home Page
// Libraries
import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Components
import MainGrid from '../../../Grid/components/MainGrid';
import VariableGrid from '../../../Grid/components/VariableGrid';

// Declaration
class Whatever extends PureComponent {
  static propTypes = {
    mainResults: PropTypes.arrayOf(Object).isRequired,
    searchResults: PropTypes.arrayOf(Object).isRequired,
  };
  render() {
    const { mainResults, searchResults } = this.props;
    return (
      <Container>
        <MainGrid instances={mainResults} />
        <VariableGrid instances={searchResults} />
      </Container>
    );
  }
}

// TODO State Store Connection
export default Whatever;
