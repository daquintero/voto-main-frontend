import React from 'react';
import { Row, Col } from 'reactstrap';
import IndividualCard from './Card';

// Layout Map
import layoutMap from '../styling/layoutMap';

/* Imperative PureFunction Grid Approach  */
const IndividualCardGrid = instances => (
  <Row noGutters>
    {instances[0] && instances.map(instance => (
      <Col
        xs={layoutMap[instance.size].xs.outer.wrapper}
        sm={layoutMap[instance.size].sm.outer.wrapper}
        md={layoutMap[instance.size].md.outer.wrapper}
        lg={layoutMap[instance.size].lg.outer.wrapper}
        xl={layoutMap[instance.size].xl.outer.wrapper}
        className="p-2"
        key={instance.id}
      >
        <IndividualCard instance={instance} />
      </Col>
        ))}
  </Row>

);

export default IndividualCardGrid;
