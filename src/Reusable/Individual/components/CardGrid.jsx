import React from 'react';
import { Row, Col } from 'reactstrap';
import IndividualCard from './Card';

// Layout Map
import layoutMap from '../styling/layoutMap';

/* Imperative PureFunction Grid Approach  */
const IndividualCardGrid = instances => (
  <Row noGutters>
    {instances[0] && instances.map(obj => (
      <Col
        xs={layoutMap[obj.size].xs.outer.wrapper}
        sm={layoutMap[obj.size].sm.outer.wrapper}
        md={layoutMap[obj.size].md.outer.wrapper}
        lg={layoutMap[obj.size].lg.outer.wrapper}
        xl={layoutMap[obj.size].xl.outer.wrapper}
        className="p-2"
        key={obj.id}
      >
        <IndividualCard objIn={obj} key={obj.id} />
      </Col>
        ))}
  </Row>

);

export default IndividualCardGrid;
