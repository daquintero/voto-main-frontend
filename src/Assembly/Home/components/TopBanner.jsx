/* eslint-disable */
// Top Banner
// Libraries
import React, { PureComponent } from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

// Prop Types
import PropTypes from 'prop-types';

// Components TODO ADD FORM
// import CustomForm from './CustomForm';

const banner = `${process.env.PUBLIC_URL}/img/banner.svg`;

// Action Dispatched
// TODO Amount of subscribers

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
          <h3>¡Comprométete a un #VotoInformado2019!</h3>
          <div>
            Add the subscribers list here.
          </div>
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

