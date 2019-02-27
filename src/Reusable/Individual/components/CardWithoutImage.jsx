// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';

const CardWithoutImage = ({ instance }) => (
  <Card className="border-0 rounded-0 h-100 p-2 bg-light small-enlarge">
    <Row noGutters className="h-100">
      <Col
        xs={12}
      >
        <CardBody className="p-2">
          <Row noGutters>
            <Col
              xs={12}
              className="text-center p-1"
            >
              <h4 className="card-title mb-0">{instance.name}</h4>
              <p className="font-italic my-0">{instance.alias}</p>
            </Col>
          </Row>
        </CardBody>
      </Col>
    </Row>
  </Card>
);

CardWithoutImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
};

export default CardWithoutImage;
