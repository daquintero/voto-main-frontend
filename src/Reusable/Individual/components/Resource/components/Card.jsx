// Resource Card
// Libraries
import React, { PureComponent } from 'react';
import { Card } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Declaration
class Whatever extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { instance } = this.props;
    return (
      <Card className="text-center">
        <a href={instance.source}>
          <i className="fal fa-link fa-2x" />
          <p className="lead"> {instance.title} </p>
        </a>
      </Card>
    );
  }
}

// TODO State Store Connection
export default Whatever;
