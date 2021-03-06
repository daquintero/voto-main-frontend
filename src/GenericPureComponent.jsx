// TODO DESCRIPTION // Libraries
import React, { PureComponent } from 'react';

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
      <div>
        <div className="text-center">
          <i className="fal fa-link fa-2x" />
        </div>
        {instance.title}
      </div>
    );
  }
}

// TODO State Store Connection
export default Whatever;
