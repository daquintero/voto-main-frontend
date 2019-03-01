// Resource Card
// Libraries
import React, { PureComponent } from 'react';
import { Card } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Declaration
class Resource extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { instance } = this.props;
    return (
      <Card className="text-center">
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <i className="fal fa-link" />
          <p className="lead"> {instance.title} </p>
        </a>
      </Card>
    );
  }
}

// TODO State Store Connection
export default Resource;
