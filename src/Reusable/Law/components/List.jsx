// Law List Group

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Row } from 'reactstrap';

// Components
import Card from './Card';
import NFCard from '../../../shared/components/404/Card';

const LawsList = ({ laws, parent, light }) => (
  <div className="justify-content-center">
    <h4 className="text-center mt-2 rel">Leyes Relacionadas</h4>
    {laws && laws.instances ? (
      <Row noGutters className="text-center justify-content-center">
        {laws.instances[0] ? (
          <ListGroup className="p-2">
            { laws.instances.map(instance => (
              <Card instance={instance} key={instance.id} />
            ))}
          </ListGroup>
        ) : (
          <NFCard type="political.Law" parent={parent} light={light} />
        )}
      </Row>
    ) : <NFCard type="political.Law" parent={parent} light={light} />}
  </div>
);

LawsList.propTypes = {
  laws: PropTypes.instanceOf(Object).isRequired,
  parent: PropTypes.instanceOf(Object).isRequired,
  light: PropTypes.bool.isRequired,
};

export default LawsList;
