import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Card from './Card';

// Layout Map
import layoutMap from '../styling/layoutMap';

// Shared Function
import getColDims from '../../../../../shared/utils/getColDims';

/* Imperative PureFunction Grid Approach  */
class BootCardGrid extends PureComponent {
  static propTypes = {
    instances: PropTypes.arrayOf(Object).isRequired,
  };

  render() {
    const { instances } = this.props;
    return (

      <Row noGutters>
        {instances[0] && instances.map(instance => (
          <Col
            {...getColDims(layoutMap, instance.size, 'outer', 'wrapper')}
            className="p-2"
            key={instance.id}
          >
            <Card instance={instance} key={instance.id} />
          </Col>
        ))}
      </Row>

    );
  }
}

export default BootCardGrid;
