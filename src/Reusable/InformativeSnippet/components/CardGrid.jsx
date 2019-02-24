import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import InformativeSnippetCard from './Card';
import { CardGridPropTypes } from './InformativeSnippetPropTypes';

// Layout Map
import layoutMap from '../styling/layoutMap';

// Functions
import getColDims from '../../../shared/utils/getColDims';


// Imperative PureFunction Grid Approach
class InformativeCardGrid extends PureComponent {
  static propTypes = CardGridPropTypes;

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
            <InformativeSnippetCard instance={instance} />
          </Col>
          ))}
      </Row>
    );
  }
}

export default InformativeCardGrid;
