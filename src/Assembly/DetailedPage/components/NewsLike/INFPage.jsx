/* eslint-disable */
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


const parentModelLabel = 'political.InformativeSnippet';


class CCPage extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    instance: PropTypes.instanceOf(Object).isRequired,
    actions: PropTypes.instanceOf(Object).isRequired,

    // Router
    match: ReactRouterPropTypes.match.isRequired,
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getDetailedPage({
      ml: parentModelLabel,
      id: match.params.id,
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

    console.log(actions.GET_DETAILED_PAGE.loaded);

    return actions.GET_DETAILED_PAGE.loaded ? (
      <Container>
        <Row className="p-2 overflow-hidden">
          <Col xs={12} md={8} className="bg-layout overflow-hidden">
            <Header instance={instance} />
            {/*<Gallery instance={instance} />*/}
            <Description instance={instance} />
            <Relationships />
          </Col>
          <Col xs={12} md={4} className="p-2">
           <RightSide
             instance={instance}
             url={this.props.match.url}
           />
          </Col>
        </Row>
      </Container>
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

export default connect(mapStateToProps)(CCPage);
