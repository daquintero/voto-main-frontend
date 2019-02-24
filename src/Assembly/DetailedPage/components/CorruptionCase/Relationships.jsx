// Relationships Section Corruption CorruptionCase
import React, { PureComponent } from 'react';

import { Row, Col } from 'reactstrap';

// Components
import IndividualCardGrid from '../../../../Reusable/Individual/components/DetailedReduxCardGrid';
import CorruptionCaseCardGrid from '../../../../Reusable/CorruptionCase/components/DetailedReduxCardGrid';
import InformativeCardGrid from '../../../../Reusable/InformativeSnippet/components/DetailedReduxCardGrid';

// Prop Types
import { RelationshipProps } from './PagePropTypes';

const modelLabel = 'corruption.corruptionCase';

// TODO Props validation
class Relationships extends PureComponent {
  static propTypes = RelationshipProps;

  render() {
    const { parentId } = this.props;
    return (
      <Row>
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#edf7ff' }}>
          <IndividualCardGrid modelLabel={modelLabel} parentId={parentId} />
        </Col>
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#fff3fa' }}>
          <InformativeCardGrid modelLabel={modelLabel} parentId={parentId} />
        </Col>
        {/* TODO Organization Card Grid */}
        <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#fafff3' }}>
          <CorruptionCaseCardGrid modelLabel={modelLabel} parentId={parentId} />
        </Col>
      </Row>
    );
  }
}

export default Relationships;
