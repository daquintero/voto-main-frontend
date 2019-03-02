// Top Banner
// Libraries
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import moment from 'moment';


// Components TODO ADD FORM
// import CustomForm from './CustomForm';


// TODO Amount of subscribers


class TopBanner extends PureComponent { // eslint-disable-line
  static propTypes = {};
  render() {
    return (
      <Row noGutters className="py-1">
        <Col sm={6} md={8} className="px-4 py-4 p-md-2 my-auto">
          <h4>¡Comprométete a un #VotoInformado2019!</h4>
          <div>
            Aquí irá la cantidad de subscriptores al form.
          </div>
          <Link to="/acerca" className="sl">
            Averigua más
          </Link>
        </Col>
        <Col className="text-center my-auto">
          <h3>
            <i className="fal fa-clock" />{' '}
            {moment('2019-05-05').diff(moment(), 'days')}
          </h3>
          <p>Dias Hasta las Elecciones</p>
        </Col>
      </Row>
    );
  }
}

// TODO State Store Connection
export default TopBanner;

