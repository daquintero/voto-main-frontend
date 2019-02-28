/* eslint-disable */
import React, { PureComponent } from 'react';

// Prop Types
import PropTypes from 'prop-types';

// Components
import Map from '../../Reusable/Map/';

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
        <Map />
      </div>
    );
  }
}

// TODO State Store Connection
export default Whatever;
