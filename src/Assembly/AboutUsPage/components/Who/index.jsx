// Libraries
import React from 'react';
import { Col } from 'reactstrap';

// Images
// const logo = `${process.env.PUBLIC_URL}/img/About/team.svg`;

// Declaration
const Who = () => (
  <>
    <Col className="p-4">
      <h5 className="py-2">¿Quién está detrás de Voto Informado?</h5>
      <p style={{ 'letter-spacing': '0.02em', 'font-size': '1.1rem' }}>
        Voto Informado está compuesto por ciudadanos que
        buscamos rescatar y revitalizar el voto como instrumento de
        cambio y progreso en nuestra sociedad. Nuestro equipo está
        compuesto por voluntarios y no tenemos relación con partidos
        políticos, organizaciones políticas ni candidatos.
      </p>
    </Col>
  </>
);

export default Who;
