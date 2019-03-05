// Libraries
import React from 'react';
import { Col, Row } from 'reactstrap';

// Images
const praxis = `${process.env.PUBLIC_URL}/img/praxis.jpeg`;

// Declaration
const Members = () => (
  <Row noGutters className="my-5 text-center justify-content-center bg-layout">
    <h5 className="py-4">Conocías a Praxis y Escuela Callejera?</h5>
    <Row noGutters>
      <Col md={4} className="p-4">
        <img src={praxis} alt="Error" className="img-full" />
      </Col>
      <Col md={8} className="p-2 align-middle my-auto">
        <p>
          Praxis es un emprendimiento social
          que busca empoderar a la ciudadanía panameña
          por medio de la información.
          Explicamos lo que pasa en Panamá y en el mundo de formas innovadoras de contar la historia.
        </p>
      </Col>
    </Row>
    <Row noGutters>
      <Col md={4} className="p-4">
        <img src={praxis} alt="Error" className="img-full w-100" />
      </Col>
      <Col md={8} className="p-2 my-auto">
        <p>
          Praxis es un emprendimiento social
          que busca empoderar a la ciudadanía panameña
          por medio de la información.
          Explicamos lo que pasa en Panamá y en el mundo de formas innovadoras de contar la historia.
        </p>
      </Col>
    </Row>
  </Row>
);

export default Members;
