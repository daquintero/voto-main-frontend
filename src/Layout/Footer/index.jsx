// Absolute Imports
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const banner = `${process.env.PUBLIC_URL}/img/banner.svg`;


const Footer = () => (
  <div className="footer__wrapper">
    <Container>
      <Row className="py-3 pb-5">
        <Col
          md
          sm={12}
        >
          <ul>
            <li><a href="/">Back to top</a></li>
            <li><a href="/legal">Legal</a></li>
            <li><a href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf">Manual</a></li>
            <li><a href="acerca">Nosotros</a></li>
          </ul>
        </Col>
        <Col
          md
          sm={12}
          className="py-sm-5 py-md-0"
        >
          <img
            src={banner}
            alt=""
            style={{ backgroundColor: 'white' }}
            className="mx-auto"
          />
        </Col>
        <Col
          md
          sm={12}
          className="text-center"
        >
          <h5> INFÓRMATE ● DEBATE ● VOTA</h5>
          <p className="lead text-center mb-1 mt-1 mx-1">
            ¿Quieres contribuir?
          </p>
          <a href="https://studio.votoinformado2019.com" className="sl">
            <p className="m-0 p-1 text-center">
              <i className="fal fa-search px-2" /> Investiga y anota fuentes creíbles que encuentres.
            </p>
            <p className="m-0 p-1 text-center">
              <i className="fal fa-sign-in-alt px-2" /> ¡Entra a VotoStudio tocándome y contribuye!
            </p>
            <p className="m-0 p-1 text-center">
              <i className="fal fa-check-square px-2" /> Y lo verifícaremos contra el fake news.
            </p>
          </a>
        </Col>
      </Row>
      <p className="text-center"> © Praxis Comunicaciones S.A. & © Escuela Callejera 2016</p>
      <p className="text-center">Voto Informado 2019</p>
    </Container>
  </div>
);

export default Footer;
