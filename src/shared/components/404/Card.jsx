// Not Found Card
import React from 'react';
import { Card, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

// Declaration
const NFCard = ({ type, parent }) => ( // TODO REMOVE IF NOT NEEDED
  <Row noGutters className="justify-content-center">
    <Col sm={12} >
      <Card>
        <a href="https://studio.votoinformado2019.com">
          <p className="m-1 px-2 small text-center">
          Ahora mismo no tenemos {type} relacionadas a este {parent}.
          </p>
          <div className="bg-light">
            <p className="lead text-center m-1">
              ¿Quieres contribuir?
            </p>
            <p className="m-0 p-1 text-center">
              <i className="fal fa-search px-2" /> Investiga y anota fuentes creibles que encuentres.
            </p>
            <p className="m-0 p-1 text-center">
              <i className="fal fa-sign-in-alt px-2" /> Entra a VotoStudio al tocarme.
            </p>
            <p className="m-0 p-1 text-center">
              <i className="fal fa-check-square px-2" /> Y lo verificaremos contra el fake news.
            </p>
          </div>
        </a>
      </Card>
    </Col>
  </Row>
);

NFCard.propTypes = {
  type: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired,
};

// TODO State Store Connection
export default NFCard;
