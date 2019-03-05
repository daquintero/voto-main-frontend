// Libraries
import React from 'react';
import { Col, Row } from 'reactstrap';

// Images
// const logo = `${process.env.PUBLIC_URL}/img/About/team.svg`;

// Declaration
const Who = () => (
  <Row noGutters className="my-5">
    <Col md={5} className="p-4">
        ghgj
    </Col>
    <Col md={7} className="p-4">
      <h5 className="py-2">Acerca de Nosotros </h5>
      <p style={{ 'letter-spacing': '0.02em' }}>
        Esta campaña fue creada por el equipo de Praxis,
        Escuela Callejera y un grupo de ciudadanos, para ciudadanos.
        El objetivo es hacer docencia para informar y empoderar a los ciudadanos para las elecciones en mayo de 2019.
      </p>
      <p style={{ 'letter-spacing': '0.02em' }}>
        Somos un grupo de jóvenes preocupados por el rumbo en el
        que va nuestro país. Vale dejar claro que esta es una campaña&nbsp;
        <strong>apartidista</strong>&nbsp;
        y fue desarrollada pro-bono por todos los participantes.
      </p>
    </Col>
  </Row>
);

export default Who;
