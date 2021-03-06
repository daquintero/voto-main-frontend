// Generic Corruption Case Card
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Date conversion
import moment from 'moment';
// Date language
import 'moment/locale/es';

// Components
import CardWithImage from './CardWithImage';
import CardWithoutImage from './CardWithoutImage';

// Configure moment settings
moment.locale('es');


class CorruptionCaseCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
    light: PropTypes.bool,
  };

  static defaultProps = {
    light: false,
  };

  render() {
    const {
      instance,
      light,
    } = this.props;

    return (
      instance.media.images && instance.media.images.length ? (
        <CardWithImage instance={instance} light={light} />
      ) : (
        <CardWithoutImage instance={instance} light={light} />
      )
    );
  }
}

export default CorruptionCaseCard;
