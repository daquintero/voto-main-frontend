// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const CardWithoutImage = ({ instance, light }) => (
  <Card className={`border-0 rounded-0 h-100 p-2 ${light ? 'bg-layout' : 'bg-shady-layout'}
  shadow span-4-cols small-enlarge`}
  >
    <Link to={`/organization/${instance.id}`}>
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
                <h3 className="card-title mb-0">{instance.name}</h3>
                <p className="font-italic my-0">{instance.alias}</p>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </Link>
  </Card>
);

CardWithoutImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  light: PropTypes.bool.isRequired,
};

export default CardWithoutImage;
