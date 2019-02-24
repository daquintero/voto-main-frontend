// Relationships Section Corruption CorruptionCase
import React from 'react';

import { Row, Col } from 'reactstrap';

// Components
import IndividualCardGrid from '../../../../Reusable/Individual/components/DetailedReduxCardGrid';
import CorruptionCaseCardGrid from '../../../../Reusable/CorruptionCase/components/DetailedReduxCardGrid';
import InformativeCardGrid from '../../../../Reusable/InformativeSnippet/components/DetailedReduxCardGrid';


// TODO Props validation
const Relationships = (
  <Row>
    <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#edf7ff' }}>
      <IndividualCardGrid />
    </Col>
    <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#fff3fa' }}>
      <InformativeCardGrid />
    </Col>
    {/* TODO Organization Card Grid */}
    <Col xs={12} md={12} className="mt-2 p-1" style={{ 'background-color': '#fafff3' }}>
      <CorruptionCaseCardGrid />
    </Col>
  </Row>
);

export default Relationships;
