// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

// Components
import Card from './components/Card';


const CardRow = ({ instances }) => (
  <Row className="card-row__wrapper">
    {instances.map((instance, index) => (
      <Col
        xs={index === 0 ? 12 : 6}
        md={4}
        lg={index === 0 ? 6 : 3}
      >
        <Card instance={instance} index={index} />
      </Col>
    ))}
  </Row>
);

CardRow.propTypes = {
  instances: PropTypes.instanceOf(Array).isRequired,
};

export default CardRow;
