// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container } from 'reactstrap';

// TODO FINISH PAGE TEST
import Card from '../Reusable/Individual/components/Controversy/components/CardGrid';

// One controversy
const controversy = [{
  size: 'full',
  title: 'Alguna Information asdfasd djkfbaksdjfhakds alsdkfjal sdkfj la sdf jalksdkjf a ',
  type: 'Employment',
  briefDescription: 'Descripcion',
  organization: 'Some organization',
}, {
  size: 'full',
  title: 'Alguna Information asdfasd kjhkjhkjhk',
  type: 'Employment',
  briefDescription: 'Descri pci onsdfgsdfgs s dfg sfd sfdg sdfg d',
  organization: 'Some organization',
}, {
  size: 'full',
  title: 'Alguna Information asdfasd ',
  type: 'Employment',
  briefDescription: 'Descripcion',
  organization: 'Some organization',
}, {
  size: 'full',
  title: 'Alguna Information asdfasd ',
  type: 'Employment',
  briefDescription: 'Descripcion',
  organization: 'Some organization',
},
];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Card instances={controversy} />
    </Container>
  </div>
);

export default Scratch;
