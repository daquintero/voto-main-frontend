// Controversy Card
// Libraries
import React, { PureComponent } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Category Repository
import categoryInfo from '../../../../../shared/utils/categoryInfo';

const relTopCreator = (instance, selection) => (
  instance.relsDict[selection].rels && instance.relsDict[selection].rels[0] ? (
    instance.relsDict[selection].rels.map(rel => (
      <Link to={`/${categoryInfo[selection].link}/${rel}`} className="notice">
        <div className={`text-center ${categoryInfo[selection].color}`}>
          <h5 className="m-0">
            <i className={`fal fa-${categoryInfo[selection].icon} p-2`} />
            {rel.name || rel.title || rel}
          </h5>
        </div>
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

        {relTopCreator(instance, 'individuals')}
        {instance.relsDict.corruptionCases.rels && instance.relsDict.corruptionCases.rels[0] ? (
            instance.relsDict.corruptionCases.rels.map(rel => (
              <Link to={`/individuo/${rel.id}`} className="notice">
                <div className="text-center">
                  <h5>
                    <i className="fal fa-briefcase p-2" />
                    {rel.name}
                  </h5>
                </div>
              </Link>
            )))
          : null}
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
