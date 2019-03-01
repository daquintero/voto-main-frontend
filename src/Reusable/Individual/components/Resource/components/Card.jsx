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
      <Card className="text-center p-2">
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <h5 className="lead m-0"><i className="fal fa-link" /> {instance.title} </h5>
        </a>
      </Card>
    );
  }
}

// TODO State Store Connection
export default Resource;
