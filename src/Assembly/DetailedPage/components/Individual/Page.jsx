// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { withBreakpoints } from 'react-breakpoints';

// Redux Actions
import { getDetailedPage } from '../../redux/actions';
import { GET_DETAILED_PAGE } from '../../redux/actionCreators';

// Components
import Header from './Header';
import Gallery from '../Gallery';
import Description from '../Description';
import Relationships from '../Relationships';
import RightSide from '../RightSide';
import MobileRightSide from '../MobileRightSide';
import Loader from '../../../../shared/components/Loader';
import History from './History';
import DetailModal from '../../../../Reusable/Grid/components/DetailModal';

// Functions
import toggleDetailModal from '../../../../shared/utils/toggleDetailModal';
import wrapper from '../../../../shared/utils/wrapper';

import breakpointsPropTypes from '../../../../shared/propTypes/breakpoints';

const parentModelLabel = 'political.Individual';


class Page extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    instance: PropTypes.instanceOf(Object).isRequired,
    actions: PropTypes.instanceOf(Object).isRequired,
    openInstance: PropTypes.instanceOf(Object).isRequired,
    openInstanceModal: PropTypes.bool.isRequired,

    // Router
    match: ReactRouterPropTypes.match.isRequired,

    // Breakpoints
    ...breakpointsPropTypes,
  };

  constructor(props) {
    super();
    this.state = {
      currentID: props.match.params.id,
      currentPath: props.match.params.path,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { match, dispatch } = nextProps;
    if (match.params.id !== prevState.currentID) {
      if (match.params.path === prevState.currentPath) {
        dispatch(getDetailedPage({
          ml: parentModelLabel,
          id: match.params.id,
          sn: 0,
        }));
        return {
          currentID: match.params.id,
          currentPath: match.params.currentPath,
        };
      }
      return {

        currentID: match.params.id,
        currentPath: match.params.currentPath,
      };
    }
    return null;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { currentID } = this.state;
    dispatch(getDetailedPage({
      ml: parentModelLabel,
      id: currentID,
      sn: 0,
    }));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: GET_DETAILED_PAGE.INIT,
    });
  }

  render() {
    const {
      // Redux
      instance,
      actions,
      openInstance,
      openInstanceModal,
      dispatch,
      currentBreakpoint,
      breakpoints,
    } = this.props;

    return actions.GET_DETAILED_PAGE.loaded ? (
      <>
        {/* Instance Detail Modal */}
        <DetailModal
          instance={openInstance}
          isOpen={openInstanceModal}

          // Callbacks
          toggle={toggleDetailModal(dispatch)}
        />
        {breakpoints[currentBreakpoint] === breakpoints.mobile ? (
          <Container>
            <Row className="p-2 pt-4 overflow-hidden column-primary">
              <Col xs={12} md={8} className="overflow-hidden p-0">
                <Header instance={instance} />
                <MobileRightSide
                  instance={instance}
                  url={this.props.match.url}
                />
                <Description instance={instance} />
                <Gallery instance={instance} />
                <History />
                <Relationships />
              </Col>
            </Row>
          </Container>
        ) : (
          <Container>
            <Row className="p-2 pt-4 overflow-hidden column-primary">
              <Col xs={12} md={8} className="overflow-hidden p-0">
                <Header instance={instance} />
                <Description instance={instance} />
                <Gallery instance={instance} />
                <History />
                <Relationships />
              </Col>
              <Col xs={12} md={4} className="p-2 mt-0 column-secondary">
                <RightSide
                  instance={instance}
                  url={this.props.match.url}
                />
              </Col>
            </Row>
          </Container>
        )}
      </>
    ) : (
      <Loader elemClass="load__page" />
    );
  }
}

const mapStateToProps = (state) => {
  const { parentInstance, actions } = state.openPage;
  const { openInstance, openInstanceModal } = state.reusable;

  return {
    // Open Page
    instance: parentInstance,
    actions,

    // Reusable
    openInstance,
    openInstanceModal,
  };
};

export default wrapper({
  component: Page,
  wrappers: [
    withRouter,
    withBreakpoints,
    connect(mapStateToProps),
  ],
});
