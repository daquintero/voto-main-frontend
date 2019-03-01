// Law List Group

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Row } from 'reactstrap';

// Components
import Card from './Card';
import NFCard from '../../../shared/components/404/Card';

const LawsList = ({ instances, parent, light }) => (
  <div className="justify-content-center">
    <h4 className="text-center mt-2 rel">Leyes Relacionadas</h4>
    <Row noGutters className="text-center justify-content-center">
      {instances[0] ? (
        <ListGroup className="p-2">
          {console.table('shit')}
          { instances.map(instance => (
            <Card instance={instance} />
        ))}
        </ListGroup>
    ) : (
      <NFCard type="political.Law" parent={parent} light={light} />
    )}
    </Row>
  </div>
);

LawsList.propTypes = {
  instances: PropTypes.instanceOf(Array).isRequired,
  parent: PropTypes.instanceOf(Object).isRequired,
  light: PropTypes.bool.isRequired,
};

export default LawsList;
