// Full CorruptionCase for the Corruption CorruptionCase Component
// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Redux Actions
import { getDetailedPage } from '../../redux/actions';

// Components
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Relationships from './Relationships';
import RightSide from './RightSide';
import Loader from '../../../../shared/components/Loader';


const parentModelLabel = 'political.Individual';


class Page extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    instance: PropTypes.instanceOf(Array).isRequired,
    actions: PropTypes.instanceOf(Array).isRequired,

    // Router
    match: ReactRouterPropTypes.match.isRequired,
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getDetailedPage({
      ml: parentModelLabel,
      id: match.params.id,
    }));
  }

  render() {
    const { actions, instance } = this.props;
    return actions.GET_DETAILED_PAGE.loading ? (
      <Container>
        <Row className="p-2">
          <Col xs={12} md={6}>
            <Header instance={instance} />
          </Col>
          <Col xs={12} md={6}>
            <Gallery instance={instance} />
          </Col>
        </Row>
        <Row className="p-2">
          <Col xs={12} md={8} className="bg-white">
            <Description instance={instance} />
            <Relationships />
          </Col>
          <Col xs={12} md={4} className="p-2">
            <RightSide instance={instance} />
          </Col>
        </Row>
      </Container>
    ) : (
      <Loader elemClass="load__page" />
    );
  }
}

const mapStateToProps = (state) => {
  const { parentInstance } = state.openPage.parentInstance;

  return {
    parentInstance,
  };
};

export default connect(mapStateToProps)(Page);
