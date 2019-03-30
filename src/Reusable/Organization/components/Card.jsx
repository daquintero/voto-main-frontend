// Generic InformativeSnippet Card
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// Date conversion
import moment from 'moment';
// Date language
import 'moment/locale/es';

// Components
import CardWithImage from './CardWithImage';

// Configure moment settings
moment.locale('es');


class OrganizationCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool.isRequired,
  };

  render() {
    const { instance, light } = this.props;
    return (
      <CardWithImage instance={instance} light={light} />
    );
  }
}

export default OrganizationCard;
