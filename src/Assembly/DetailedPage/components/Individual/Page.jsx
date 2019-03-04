// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

// Redux Actions
import { getDetailedPage } from '../../redux/actions';
import { GET_DETAILED_PAGE } from '../../redux/actionCreators';

// Components
import Header from './Header';
import Gallery from '../Gallery';
import Description from '../Description';
import Relationships from '../Relationships';
import RightSide from '../RightSide';
import Loader from '../../../../shared/components/Loader';
import History from './History';
import TopBanner from '../../../TopBanner';


const parentModelLabel = 'political.Individual';


class Page extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    instance: PropTypes.instanceOf(Object).isRequired,
    actions: PropTypes.instanceOf(Object).isRequired,

    // Router
    match: ReactRouterPropTypes.match.isRequired,
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
      instance, actions,
    } = this.props;

    return actions.GET_DETAILED_PAGE.loaded ? (
      <>
        <TopBanner />
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
      </>
    ) : (
      <Loader elemClass="load__card" />
    );
  }
}

const mapStateToProps = (state) => {
  const { parentInstance, actions } = state.openPage;
  return {
    instance: parentInstance,
    actions,
  };
};

export default connect(mapStateToProps)(Page);


// constructor(props) {
//   super();
//   this.state = {
//     currentID: props.match.params.id,
//   };
// }
//
// static getDerivedStateFromProps(nextProps, prevState) {
//   if (nextProps.match.params.id !== prevState.currentID) {
//     nextProps.dispatch(getDetailedPage({
//       ml: parentModelLabel,
//       id: this.props.match.params.id,
//       sn: 0,
//     }));
//   }
// }
