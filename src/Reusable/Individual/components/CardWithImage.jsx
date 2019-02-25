// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';

// Components
// TODO USE STATISTICS
// import CardStatistics from '../../Statistics/components/CardStatistics';

// Styling
import layoutMap from '../styling/layoutMap';


const CardWithImage = ({ instance }) => {
  const primaryImage = instance.images[0];
  return (
    <Card className="border-0 bg-light rounded-0 small-enlarge">
      <Row noGutters>
        <Col
          xs={layoutMap[instance.size].xs.inner.imgWrapper}
          sm={layoutMap[instance.size].sm.inner.imgWrapper}
          md={layoutMap[instance.size].md.inner.imgWrapper}
          lg={layoutMap[instance.size].lg.inner.imgWrapper}
          xl={layoutMap[instance.size].xl.inner.imgWrapper}
        >
          <img
            className="img-cover"
            src={primaryImage.url}
            alt="Something"
          />
        </Col>
        <Col
          xs={layoutMap[instance.size].xs.inner.contentWrapper}
          sm={layoutMap[instance.size].sm.inner.contentWrapper}
          md={layoutMap[instance.size].md.inner.contentWrapper}
          lg={layoutMap[instance.size].lg.inner.contentWrapper}
          xl={layoutMap[instance.size].xl.inner.contentWrapper}
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
    </Card>
  );
};

CardWithImage.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
};

export default CardWithImage;
