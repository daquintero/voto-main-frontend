// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container } from 'reactstrap';

// TODO FINISH PAGE TEST
import VariableGrid from '../Reusable/Grid/components/VariableGrid';

// Test Sample Data
const data = [{
  size: 'full',
  title: 'Alguna Information asdfasd ',
  type: 'Employment',
  description: 'Descripcion',
  organization: 'Some organization',
}, {
  size: 'full',
  title: 'Alguna Information asdfasd ',
  type: 'Employment',
  description: 'Descripcion',
  organization: 'Some organization',
}, {
  size: 'full',
  title: 'Alguna Information asdfasd ',
  type: 'Employment',
  description: 'Descripcion',
  organization: 'Some organization',
}, {
  size: 'full',
  title: 'Alguna Information asdfasd ',
  type: 'Employment',
  description: 'Descripcion',
  organization: 'Some organization',
},
];

const Scratch = () => (
  <div className="layout">
    <Container>
      <VariableGrid data={data} />
    </Container>
  </div>
);

export default Scratch;
