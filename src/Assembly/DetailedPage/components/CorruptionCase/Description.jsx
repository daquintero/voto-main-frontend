// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'html-react-parser';
import { Container } from 'reactstrap';

// TODO CUSTOMIZE IMG

class Description extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      instance,
    } = this.props;

    return (
      <Container>
        {ReactHtmlParser(instance.longDescription)}
      </Container>
    );
  }
}

export default Description;
