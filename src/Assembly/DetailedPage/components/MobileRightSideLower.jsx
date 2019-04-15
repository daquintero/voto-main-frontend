// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Row } from 'reactstrap';

// Components
import Share from '../../../Reusable/SocialShare/components/Card';
import LawList from '../../../Reusable/Law/components/List';
// import TwitterFeed from '../../../Reusable/SocialShare/components/TwitterFeed';

// Declaration
class RightSide extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,

    // Variable
    url: PropTypes.string.isRequired,
    laws: PropTypes.instanceOf(Array).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      light: true,
    };
  }

  render() {
    const {
      instance, url, laws,
    } = this.props;
    const { light } = this.state;

    return (
      <Row noGutters>
        <Row noGutters className="px-2 py-4 justify-content-center right-side__row">
          <LawList
            instances={laws}
            parent={instance.modelLabel}
            light={light}
          />
        </Row>
        <Row noGutters className="p-3 right-side__row share justify-content-center">
          <Share
            title={instance.title || instance.name}
            description={instance.briefDescription}
            url={`https://www.votoinformado2019.com${url}`}
          />
        </Row>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  const { laws } = state.openPage.relatedInstances;
  const { resources } = state.openPage.parentInstance.media;
  return {
    laws,
    resources,
  };
};

export default connect(mapStateToProps)(RightSide);

