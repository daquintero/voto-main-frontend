// Libraries
import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

// Redux Actions
import { getDetailedPage } from '../../redux/actions';

// Components
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Relationships from '../Relationships';
import RightSide from './RightSide';
import Loader from '../../../../shared/components/Loader';


const parentModelLabel = 'political.InformativeSnippet';


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
    return actions.GET_DEATILED_PAGE ? (
      <Container>
        <Row className="p-2">
          <Col xs={12} md={8} className="bg-white">
            <Header instance={instance} />
            <Gallery instance={instance} />
            <Description instance={instance} />
            <Relationships />
          </Col>
          <Col xs={12} md={4} className="p-2">
            <RightSide instance={instance} />
          </Col>
        </Row>
      </Container>
    ) : (
      <Loader elemClass="load__card" />
    );
  }
}

export default connect(state => ({
  // Basic CorruptionCase information
  basic: state.openPage.basic,
}))(Page);
