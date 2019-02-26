/* eslint-disable */
// Top Banner
// Libraries
import React, { PureComponent } from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Prop Types
import PropTypes from 'prop-types';

const banner = `${process.env.PUBLIC_URL}/img/banner.svg`;

// Declaration
class TopBanner extends PureComponent {
  static propTypes = {
    hi: PropTypes.string.isRequired,
  };
  render() {
    return (
      <Row noGutters className="py-4 bg-light">
        <Col sm={6} md={4} className="px-4 py-4 py-sm-0">
          <img src={banner} alt="Error" />
        </Col>
        <Col sm={6} md={8} className="px-4">
          <h3>¡Bienvenida(o) a #VotoInformado2019!</h3>
          <p className="pr-5 m-0">
            Somos voluntarios sin relación a partidos
            políticos, organizaciones políticas ni candidatos
            que buscamos rescatar y revitalizar el voto como instrumento de
            cambio y progreso en nuestra sociedad.
          </p>
          <Link to="/acerca">
            Averigua más
          </Link>
        </Col>
      </Row>
    );
  }
}

// TODO State Store Connection
export default TopBanner;

