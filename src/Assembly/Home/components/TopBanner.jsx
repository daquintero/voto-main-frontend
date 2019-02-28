// Top Banner
// Libraries
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


// Components TODO ADD FORM
// import CustomForm from './CustomForm';

const banner = `${process.env.PUBLIC_URL}/img/banner.svg`;

// TODO Amount of subscribers


class TopBanner extends PureComponent { // eslint-disable-line
  static propTypes = {};
  render() {
    return (
      <Row noGutters className="py-4 shady-layout">
        <Col sm={6} md={4} className="px-2 py-2 py-sm-0">
          <img src={banner} alt="Error" />
        </Col>
        <Col sm={6} md={8} className="text-center px-4 p-md-0">
          <h4>¡Comprométete a un #VotoInformado2019!</h4>
          <div>
            Aquí irá la cantidad de subscriptores al form.
          </div>
          <Link to="/acerca" className="sl">
            Averigua más
          </Link>
        </Col>
      </Row>
    );
  }
}

// TODO State Store Connection
export default TopBanner;

