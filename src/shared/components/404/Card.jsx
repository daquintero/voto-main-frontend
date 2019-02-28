// Not Found Card
import React from 'react';
import { Card, Row, Col } from 'reactstrap';


// Declaration
const NFCard = () => ( // TODO REMOVE IF NOT NEEDED
  <Row noGutters className="justify-content-center">
    <Col sm={12} >
      <Card>
        <a href="https://studio.votoinformado2019.com">
          <p className="m-1 px-2 small text-center">
          Ahora mismo no tenemos información relacionada a esto.
          </p>
          <div className="bg-light">
            <p className="lead text-center m-1">
              ¿Quieres contribuir?
            </p>
            <p className="m-0 p-1 text-center">
              <i className="fal fa-search px-2" /> Investiga.
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

// TODO State Store Connection
export default NFCard;
