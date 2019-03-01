// Generic InformativeSnippet Card
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


class InformativeSnippetCard extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const {
      instance,
    } = this.props;

    return (
      instance.media.images && instance.media.images.length ? (
        <CardWithImage instance={instance} />
      ) : (
        <CardWithoutImage instance={instance} />
      )
    );
  }
}

export default InformativeSnippetCard;
