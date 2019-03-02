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
      <Container className="overflow-hidden py-4">
        {console.log(instance.longDescription.length)}
        {instance.longDescription.length === 8 ?
          <p className="m-0 lead text-center">
          Este individuo no tiene descripción. ¡Propóne una en&nbsp;
            <a href="https://studio.votoinformado2019.com" className="sl text-danger">
              VotoStudio
            </a>!
          </p>
          : (ReactHtmlParser(instance.longDescription))}
      </Container>
    );
  }
}

export default Description;
