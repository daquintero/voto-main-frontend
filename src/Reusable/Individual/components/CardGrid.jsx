// Absolute Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import IndividualCard from './Card';

// Components
import Loader from '../../../shared/components/Loader';

// Layout Map
import layoutMap from '../styling/layoutMap';

/* Imperative PureFunction Grid Approach  */
const IndividualCardGrid = (instances, action) => (
  <Row noGutters>
    {instances.map(instance => (
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
        {action.loading && <Loader elemClass="load__card" />}
      </Col>
    ))}
  </Row>
);

IndividualCard.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
  action: PropTypes.instanceOf(Object).isRequired,
};

export default IndividualCardGrid;
