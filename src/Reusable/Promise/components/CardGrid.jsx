import React, { PureComponent } from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Card from './CardWithParent';

/* Imperative PureFunction Grid Approach  */
class CardGrid extends PureComponent {
  static propTypes = {
    instances: PropTypes.arrayOf(Object).isRequired,
  };

  render() {
    const { instances } = this.props;
    return (
      <Row noGutters>
        <div className="square-grid">
          {instances[0] && instances.map(instance => (
            <Card instance={instance} key={instance.id} />
          ))}
        </div>
      </Row>
    );
  }
}

export default CardGrid;
