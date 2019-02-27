// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Components
// TODO USE STATISTICS
// import CardStatistics from '../../Statistics/components/CardStatistics';

// Styling
import layoutMap from '../styling/layoutMap';

// Shared Function
import getColDims from '../../../shared/utils/getColDims';

const CardWithImage = ({ instance }) => {
  const primaryImage = instance.images[0];
  return (
    <Card className="border-0 bg-light rounded-0 small-enlarge span-2-rows">
      <Link to={`/individuo/${instance.id}`}>
        <Row noGutters>
          <Col
            {...getColDims(layoutMap, instance.size, 'outer', 'wrapper')}
          >
            <img
              className="img-cover"
              src={primaryImage.url}
              alt="Something"
            />
          </Col>
          <Col
            {...getColDims(layoutMap, instance.size, 'inner', 'contentWrapper')}
          >
            <CardBody className="p-2">
              <Row noGutters>
                <Col xs={12} className="mb-2">
                  <h4 className="card-title mb-0 text-right">{instance.name}</h4>
                  <p className="text-right my-0 font-italic">{instance.alias}</p>
                </Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Link>
    </Card>
  );
};

CardWithImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
};

export default CardWithImage;
