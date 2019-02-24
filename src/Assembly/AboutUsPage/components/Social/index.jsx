// Libraries
import React from 'react';
import { Col } from 'reactstrap';

// Declaration
const Index = () => (
    <>
      {/* FOLLOW US TEXT */}
      <Col>
        <p className="lead text-center">
            No olvides seguirnos en Instagram
        </p>
        <p className="text-center m-1">
          <a className="lead" href="https://www.instagram.com/praxispty/">
            <span>
        @praxispty
            </span>
          </a>
        </p>
        <p className="text-center lead m-1">
          <a href="https://www.instagram.com/escuelacallejera/">
            <span>
        @escuelacallejera
            </span>
          </a>
        </p>
      </Col>

      {/* INSTAGRAM GRID */}
      <div className="insta-grid">
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js" />
        <div className="photos-container">
          <iframe
            title="instagram"
            src="//lightwidget.com/widgets/554828df384f55d5b8ad277da18957ec.html"
            scrolling="no"
            className="lightwidget-widget"
          />
        </div>
      </div>
      <Col>
        <p className="text-center">Voto Informado 2019</p>
        <p className="text-center"> © Praxis Comunicaciones S.A. & © Escuela Callejera 2016</p>
      </Col>
    </>
);
export default Index;
