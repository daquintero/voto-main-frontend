import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import InformativeSnippetCard from './Card';

// Layout Map
import layoutMap from '../styling/layoutMap';

// Functions
import getColDims from '../../../shared/utils/getColDims';


// Imperative PureFunction Grid Approach
class InformativeCardGrid extends PureComponent {
  static propTypes = PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired;

  render() {
    const { instances } = this.props;
    return (
      // Controlled widths by the frontend design
      <Row noGutters>
        {instances.map(instance => (
          <Col
            {...getColDims(layoutMap, instance.size)}
            className="p-2"
            key={instance.id}
          >
            <InformativeSnippetCard
              instance={instance}
              action={}
            />
          </Col>
          ))}
      </Row>
    );
  }
}

export default InformativeCardGrid;
