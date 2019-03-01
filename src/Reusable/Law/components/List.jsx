// Law List Group

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Row } from 'reactstrap';

// Components
import Card from './Card';
import NFCard from '../../../shared/components/404/Card';

const LawsList = ({ instances, parent }) => (
  <Row className="mx-auto justify-content-center">
    <h4 className="text-center mt-2 rel">Leyes Relacionadas</h4>
    {instances ? (
      <ListGroup className="p-2">
        { instances.map(instance => (
          <Card instance={instance} />
        ))}
      </ListGroup>
    ) : (
      <NFCard type="political.Law" parent={parent} />
    )}
  </Row>
);

LawsList.propTypes = {
  instances: PropTypes.instanceOf(Array).isRequired,
  parent: PropTypes.instanceOf(Object).isRequired,
};

export default LawsList;
