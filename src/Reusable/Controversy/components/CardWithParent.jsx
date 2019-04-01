// Absolute Imports
import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

// Functions
import relTopCreator from '../../Individual/components/relTopCreator';
import squashString from '../../../shared/utils/squashString';

// Actions
import typeBanner from '../../typeBanner';


class CardWithParent extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,

    // Callbacks
    onClick: PropTypes.func.isRequired,
  };

  renderCardBody = ({ briefDescription }, maxLength) => (
    <CardBody className="p-2 pb-4">
      <p className="p-1 pb-4 m-0 small">
        {squashString(briefDescription, maxLength)}
        <span className="text-black-50"> {briefDescription.length > maxLength && 'averigua mas'}</span>
      </p>
    </CardBody>
  );

  render() {
    // Props
    const {
      instance,
      light,
      location,

      // Callbacks
      onClick,
    } = this.props;

    const maxLength = location === 'search' ? 512 : 140;

    return (
      <div className={`span-6-cols ${light ? 'bg-layout' : 'bg-shady-layout'} shadow small-enlarge p-rel`}>
        {relTopCreator(instance)}
        {instance.briefDescription.length > maxLength ? (
          <Card className="border-0 rounded-0" onClick={onClick} data-instance={JSON.stringify(instance)}>
            {this.renderCardBody(instance, maxLength)}
          </Card>
        ) : (
          <Card className="border-0 rounded-0">
            <a target="_blank" rel="noreferrer noopener" href={instance.source}>
              {this.renderCardBody(instance)}
            </a>
          </Card>
        )}
        {typeBanner('Controversia', '#fffbff')}
      </div>
    );
  }
}

export default CardWithParent;
