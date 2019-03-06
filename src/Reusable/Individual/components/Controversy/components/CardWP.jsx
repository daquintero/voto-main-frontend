// Controversy Card
// Libraries
import React, { PureComponent } from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Category Repository
import categoryInfo from '../../../../../shared/utils/categoryInfo';

const relTopCreator = instance => (
  instance.individuals && instance.individuals[0] ? (
    instance.individuals.map(individual => (
      <Link to={`/individuo/${individual.id}`} className="notice">
        <Row noGutters className="align-content-center my-auto">
          <Col xs={2}>
            {individual.primaryImageUrl ? (
              <img src={individual.primaryImageUrl} alt="" className="p-2 rounded-circle h-25" />
            ) : (
              <i className="fal fa-user p-2 px-4" />
            ) }
          </Col>
          <Col xs={10} className="p-2">
            <div className="text-center">
              <h5 className="m-0">
                {individual.name}
              </h5>
            </div>
          </Col>
        </Row>
      </Link>
    )))
    : null
);

// Declaration
class ContCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,
  };
  render() {
    const { instance, light } = this.props;
    return (
      <div className={`span-6-cols ${light ? 'bg-layout' : 'bg-shady-layout'} shadow small-enlarge`}>
        {relTopCreator(instance)}
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className="border-0 rounded-0">
            {categoryInfo[instance.type] ? (
              <CardHeader className="pt-1 pb-1 ">
                <i className={`float-left fa p-1 fa-${categoryInfo[instance.type].icon}`} />
                <h5 className="float-right mb-0">{categoryInfo[instance.type].Spanish}</h5>
              </CardHeader>
            ) : null}
            <CardBody className="p-2">
              <p className="p-1 m-0 small">{instance.briefDescription}</p>
              {/* TODO ADD PARENT INDIVIDUAL */}
            </CardBody>
          </Card>
        </a>
      </div>
    );
  }
}

export default ContCard;
