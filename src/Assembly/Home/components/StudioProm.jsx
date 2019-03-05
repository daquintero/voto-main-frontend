// Libraries
import React from 'react';
import { Row, Col } from 'reactstrap';

// Components
const banner = `${process.env.PUBLIC_URL}/img/banner.svg`;

// Declaration
const StudioProm = () => ( // TODO REMOVE IF NOT NEEDED
  <>
    <div>
      <Col xs={12} className="py-4 mt-4 bg-shady-layout justify-content-center text-center">
        <Row noGutters className="justify-content-center mx-auto">
          <Col xs={12} md={6} className="p-2 my-auto">
            <img src={banner} alt="Error" />
          </Col>
          <Col xs={12} md={6} className="p-2">
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
      </Col>
    </div>
  </>
);

export default StudioProm;
