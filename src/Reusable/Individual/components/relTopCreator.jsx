import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';

const profile = `${process.env.PUBLIC_URL}/img/user.svg`;

const relTopCreator = instance => (
  instance.individuals && instance.individuals[0] ? (
    instance.individuals.map(individual => (
      <Link to={`/individuo/${individual.id}`} key={individual.id} className="notice">
        <Row noGutters className="align-content-center my-auto">
          <div className="d-flex pt-2">
            <div>
              {individual.primaryImageUrl ? (
                <img src={individual.primaryImageUrl} alt="" className="ml-3 top-img" />
              ) : (
                <img className="img-full ml-3 top-img" src={profile} alt="" />
              )}
            </div>
            <hr style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }} />
            <div>
              <p className="m-0 small text-black-50 ml-2 mt-1">
                {individual.name}
              </p>
            </div>
          </div>
        </Row>
      </Link>
    )))
    : null
);

export default relTopCreator;
