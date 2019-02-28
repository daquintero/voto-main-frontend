// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

// Components
import Card from './Card';


const CardRow = ({ instances }) => (
  <Row>
    {instances.map(instance => (
      <Col>
        <Card instance={instance} />
      </Col>
    ))}
  </Row>
);

CardRow.propTypes = {
  instances: PropTypes.instanceOf(Array).isRequired,
};

export default CardRow;
