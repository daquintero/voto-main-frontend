// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container } from 'reactstrap';

// TODO FINISH PAGE TEST
import VariableGrid from '../Reusable/Grid/components/VariableGrid';

// Test Sample Data
const data = [{
  id: 2,
  type: 'corruption.CorruptionCase',
  size: 'full',
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  statistics: [{
    id: 3,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
}, {
  id: 6,
  type: 'corruption.InformativeSnippet',
  size: 'full',
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  statistics: [{
    id: 3,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
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
