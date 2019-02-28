/* eslint-disable */
// Search Component
import React, { PureComponent } from 'react';
import { Row, Col, Input } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Components
import Generic from '../../../../Grid/components/Generic';

// Declaration
class Search extends PureComponent {
  static propTypes = {
    instances: PropTypes.arrayOf(Object).isRequired,
  };
  render() {
    const { instances } = this.props;
    return (
      <div className="py-5 my-5">
        <Row noGutters className="justify-content-center p-4">
          <Col md={4} className="text-center">
            <h4>¡Investiga!</h4>
          </Col>
          <Col md={8} className="align-content-center">
            <Input placeholder="Cualquier cosa" />
          </Col>
        </Row>
        <Row noGutters className="justify-content-center py-2">
          <Generic instances={instances} />
        </Row>
      </div>
    );
  }
}

// TODO State Store Connection
export default Search;


