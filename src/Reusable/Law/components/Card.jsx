// Law Card

// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Col, Row } from 'reactstrap';


const LawsList = ({ instance }) => (
  <ListGroupItem className="list-right" tag="a" href={instance.source}>
    <Row noGutters>
      <Col xs={12} >
        <h5 className="small m-0 p-0"> No. <i className="fal fa-gavel" /> </h5>
        <h5 className="p-1 m-0 lead">{instance.code}</h5>
      </Col>
      <Col xs={12} className="pl-3 ">
        <p className="small text-left m-0">{instance.longDescription}</p>
      </Col>
    </Row>
  </ListGroupItem>
);

LawsList.propTypes = {
  instance: PropTypes.instanceOf(Object).isRequired,
};


export default LawsList;
