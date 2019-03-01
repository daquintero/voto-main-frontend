// Law Card

// Libraries
import React from 'react';
import { ListGroupItem, Col, Row } from 'reactstrap';


const LawsList = instance => (
  <ListGroupItem className="list-right" tag="a" href={instance.source}>
    <Row noGutters>
      <Col xs={2} className="align-middle">
        <i className="fal fa-gavel" />
      </Col>
      <Col xs={2} >
        <p className="small m-0 p-0"> No. </p>
        <h4 className="p-1">{instance.code}</h4>
      </Col>
      <Col xs={8} className="pl-3 ">
        <p className="small text-left ">{instance.briefDescription}</p>
      </Col>
    </Row>
  </ListGroupItem>
);

export default LawsList;
