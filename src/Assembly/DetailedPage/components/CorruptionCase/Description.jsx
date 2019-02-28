// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'html-react-parser';


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
        {ReactHtmlParser(instance.longDescription)}
      </div>
    );
  }
}

export default Description;
