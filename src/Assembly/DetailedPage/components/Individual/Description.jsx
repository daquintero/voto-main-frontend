// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Description extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      instance,
    } = this.props;

    return (
      <div className="m-1 p-2">
        { /* TODO: HTML parser */ }
        {instance.longDescription}
      </div>
    );
  }
}

export default Description;
