// Law List Group

// Libraries
import React from 'react';
import { ListGroup } from 'reactstrap';

// Components
import Card from './Card';

const LawsList = laws => (
  <ListGroup className="p-2">
    { laws.map(law => (
      <Card law={law} />
        ))}
  </ListGroup>
);

export default LawsList;
