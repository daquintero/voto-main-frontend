import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const profile = `${process.env.PUBLIC_URL}/img/user.svg`;

const relTopCreator = instance => (
  instance.individuals && instance.individuals[0] ? (
    instance.individuals.map(individual => (
      <Link to={`/individuo/${individual.id}`} key={individual.id} className="notice">
        <Row noGutters className="align-content-center my-auto">
          <Col xs={2} className="p-2 small-img">
            {individual.primaryImageUrl ? (
              <img src={individual.primaryImageUrl} alt="" className="mx-3" />
              ) : (
                <img className="img-full mx-3" src={profile} alt="" />
              ) }
          </Col>
          <Col xs={10} className="p-2 px-4 my-auto">
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
