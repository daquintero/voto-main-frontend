// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Row } from 'reactstrap';

// Styling
import layoutMap from '../styling/layoutMap';


const CardWithoutImage = ({ instance }) => (
  <Card className="border-0 rounded-0 h-100 p-2 bg-light small-enlarge">
    <Row noGutters className="h-100">
      <Col
        xs={layoutMap[instance.size].xs.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
        sm={layoutMap[instance.size].sm.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
        md={layoutMap[instance.size].md.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
        lg={layoutMap[instance.size].lg.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
        xl={layoutMap[instance.size].xl.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
      >
        <CardBody className="p-2">
          <Row noGutters>
            <Col
              xs={layoutMap[instance.size].xs.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
              sm={layoutMap[instance.size].sm.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
              md={layoutMap[instance.size].md.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
              lg={layoutMap[instance.size].lg.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
              xl={layoutMap[instance.size].xl.inner.imgWrapper + layoutMap[instance.size].xs.inner.contentWrapper}
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
