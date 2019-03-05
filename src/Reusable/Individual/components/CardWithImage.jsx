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

const CardWithImage = ({ instance, light }) => {
  const primaryImage = instance.media.images[0];
  return (
    <Card
      className={`border-0 ${light ? 'bg-layout' : 'bg-shady-layout'} rounded-0 small-enlarge span-3-cols shadow`}
    >
      <Link to={`/individuo/${instance.id}`}>
        <Row noGutters>
          <Col
            {...getColDims(layoutMap, instance.size, 'outer', 'wrapper')}
          >
            <img
              className="img-full"
              src={primaryImage.url}
              alt=""
            />
          </Col>
          <Col >
            <CardBody className="p-2">
              <Row noGutters>
                <Col xs={12} className="mb-2">
                  <h5 className="card-title mb-0">{instance.name}</h5>
                  <p className="text-black-50 my-0 font-italic">{instance.alias}</p>
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
  light: PropTypes.bool.isRequired,
};

export default CardWithImage;
