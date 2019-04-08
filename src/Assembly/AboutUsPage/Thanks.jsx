// Libraries
import React from 'react';
import { Col, Row } from 'reactstrap';

// Images
const logo = `${process.env.PUBLIC_URL}/img/conteo.png`;

// Declaration
const Thanks = () => (
  <Row noGutters className="my-5">
    <Col md={7} className="p-4">
      <h5 className="py-2">Agradecimientos</h5>
      <p style={{ 'letter-spacing': '0.02em' }}>
        Queremos darles un agradecimiento especial a todas
         las personas que participarton en la creación
         de esta campaña, en la página web, en el Manual
         de Cívica Electoral, en el Chatbot, las
         investigaciones y la creación de los perfiles
        de los candidatos, en los videos, en el diseño
        y en la visualización de la información, y en
        todo lo que compone Voto Informado 2019.
      </p>
      <p style={{ 'letter-spacing': '0.02em' }}>
        Apreciamos mucho el apoyo y tiempo de todos,
        en especial a: los participantes del Investigatón 2018,
        los participantes de Panamá-Hackea 2018, a los desarrolladores de la plataforma,
        a Melida Botacio, Angel Corro, Augusto Revello, Franz Delgado, Dario Quintero,
        James Williams, Leopoldo Alfaro, Emmanuel Lobo, y Cynthia Paolini.
      </p>
    </Col>
    <Col md={5} className="p-4">
      <img src={logo} alt="Error" className="img-cover" />
    </Col>
  </Row>
);

export default Thanks;
