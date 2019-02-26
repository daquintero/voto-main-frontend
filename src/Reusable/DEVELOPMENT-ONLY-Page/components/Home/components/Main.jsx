// Main Component Sections
// Libraries
import React, { PureComponent } from 'react';
import { Row } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Components
import MainGrid from '../../../../Grid/components/MainGrid';

// TODO Center the components
// Declaration
class Main extends PureComponent {
    static propTypes = {
      instances: PropTypes.arrayOf(Object).isRequired,
    };
    render() {
      const { instances } = this.props;
      return (
          <>
            <Row noGutters className="justify-content-center py-4">
              <MainGrid instances={instances} />
            </Row>
          </>
      );
    }
}

// TODO State Store Connection
export default Main;

