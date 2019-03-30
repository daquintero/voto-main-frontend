import React from 'react';
import { Row } from 'reactstrap';

function TypeBanner(text) {
  return (
    <Row className="bg-light text-right px-3 py-1" noGutters>
      <p className="text-black-50 m-0 small w-100">{text}</p>
    </Row>
  );
}

export default TypeBanner;
