// Law List Group

// Libraries
import React, { PureComponent } from 'react';
import { ListGroup } from 'reactstrap';

// Props
import { lawsListPropTypes } from './LawPropTypes';

// Components
import Card from './Card';

class LawsList extends PureComponent {
  static propTypes = lawsListPropTypes;

  render() {
    const { laws } = this.props;
    return (
      <ListGroup className="p-2">
        { laws.map(law => (
          <Card law={law} />
        ))}
      </ListGroup>
    );
  }
}

export default LawsList;
