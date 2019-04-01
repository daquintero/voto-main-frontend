import React from 'react';
import { Row } from 'reactstrap';


function typeBanner(text) {
  return (
    <Row className="bg-light text-right px-3 py-1 bottom-line" noGutters>
      <p className="text-black-50 m-0 small w-100 text-uppercase">{text}</p>
    </Row>
  );
}

export default typeBanner;
