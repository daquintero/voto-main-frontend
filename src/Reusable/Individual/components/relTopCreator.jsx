import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';


const relTopCreator = instance => (
  instance.individuals && instance.individuals[0] ? (
    instance.individuals.map(individual => (
      <Link to={`/individuo/${individual.id}`} key={individual.id} className="notice">
        <Row noGutters className="align-content-center my-auto">
          <Col xs={2}>
            {individual.primaryImageUrl ? (
              <img src={individual.primaryImageUrl} alt="" className="p-2 mx-3 small-img" />
              ) : (
                <i className="fal fa-user ml-3 py-2" />
              ) }
          </Col>
          <Col xs={10} className="p-2 my-auto">
            <div>
              <p className="m-0">
                {individual.name}
              </p>
            </div>
          </Col>
        </Row>
      </Link>
    )))
    : null
);

export default relTopCreator;
