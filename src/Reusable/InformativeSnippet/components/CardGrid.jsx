// Absolute Imports
import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import InformativeSnippetCard from './Card';

// Layout Map
import layoutMap from '../styling/layoutMap';

// Components
import Loader from '../../../shared/components/Loader';

// Functions
import getColDims from '../../../shared/utils/getColDims';


class InformativeCardGrid extends PureComponent {
  static propTypes = {
    instances: PropTypes.instanceOf(Array).isRequired,
    action: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const { instances, action } = this.props;
    return (
      <Row noGutters>
        {instances.map(instance => (
          <Col
            {...getColDims(layoutMap, instance.size)}
            className="p-2"
            key={instance.id}
          >
            <InformativeSnippetCard instance={instance} />
            {action.loading && <Loader elemClass="load__card" />}
          </Col>
        ))}
      </Row>
    );
  }
}

export default InformativeCardGrid;
