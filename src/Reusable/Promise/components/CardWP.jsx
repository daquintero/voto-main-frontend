// Card with Parent for the Promise
import React, { PureComponent } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import relTopCreator from '../../Individual/components/relTopCreator';

// Category Repository
import categoryInfo from '../../../shared/utils/categoryInfo';


// Declaration
class PromWPCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool,
  };

  static defaultProps = {
    light: false,
  };

  render() {
    const { instance, light } = this.props;
    return (
      <div className={`${light ? 'bg-layout' : 'bg-shady-layout'} shadow span-4-cols`}>
        {relTopCreator(instance)}
        <a target="_blank" rel="noreferrer noopener" href={instance.source}>
          <Card className="bg-light border-0 rounded-0 small-enlarge">
            {categoryInfo[instance.type] ? (
              <CardHeader className="pt-1 pb-1 ">
                <i className={`float-left fa p-1 fa-${categoryInfo[instance.type].icon}`} />
                <p className="float-right small mb-0">{categoryInfo[instance.type].spanish}</p>
              </CardHeader>
          ) : null}
            <CardBody className="p-2">
              <p className="p-1 m-0 small">{instance.briefDescription}</p>
              {instance.individuals && (
                <div className="text-center"><i className="fal fa-user p-2" />{instance.individuals}</div>
              )}
            </CardBody>
          </Card>
        </a>
      </div>
    );
  }
}

export default PromWPCard;
