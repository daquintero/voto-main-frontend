// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import HtmlReactParser from 'html-react-parser';
import moment from 'moment';

// Actions
import { getKnowledgeBaseDetail } from '../redux/actions';

// Components
import Loader from '../../../shared/components/Loader';
import Share from '../../../Reusable/SocialShare/components/Card';

// Functions
import imageUrl from '../../../shared/utils/imageUrl';


class Tutorial extends PureComponent {
  static propTypes = {
    // Router
    match: ReactRouterPropTypes.match.isRequired,

    // Redux
    actions: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    instance: PropTypes.instanceOf(Object),
  };

  static defaultProps = {
    instance: {},
  };

  componentDidMount() {
    // Grab tutorial info
    const { match: { params }, dispatch } = this.props;

    dispatch(getKnowledgeBaseDetail({
      modelLabel: 'voting.Tutorial',
      id: params.id,
    }));
  }

  getDaysAgo = (dateCreated) => {
    const daysAgo = moment().diff(dateCreated, 'days');
    switch (daysAgo) {
      case 0:
        return 'Posted today';
      case 1:
        return 'Posted yesterday';
      default:
        return `Posted ${daysAgo} days ago`;
    }
  };

  render() {
    // Props
    const {
      actions: { GET_KNOWLEDGE_BASE_DETAIL }, instance,
    } = this.props;

    return !GET_KNOWLEDGE_BASE_DETAIL.loaded ? (
      <Loader elemClass="load__page" />
    ) : (
      <div className="knowledge-base__tutorial__wrapper">
        <Container>
          {instance.media.images.length !== 0 && (
            <img
              src={imageUrl(instance.media.images[0].url)}
              alt=""
              className="knowledge-base__tutorial__img"
            />
          )}
          <div className="knowledge-base__tutorial__text">
            <Row className="knowledge-base__tutorial__text__header justify-content-sm-center">
              <Col xl={8}>
                <h2>{instance.title}</h2>
                <p>{instance.summary}</p>
                <small className="text-black-50">{this.getDaysAgo(instance.dateCreated)}</small>
              </Col>
              <Col xl={4} className="text-center pt-sm-3">
                <Share hasHeader={false} />
              </Col>
            </Row>
            <hr />
            <div>{HtmlReactParser(instance.body)}</div>
          </div>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { actions } = state.knowledgeBase;
  const { instance } = state.knowledgeBase.detail;

  return {
    actions,
    instance,
  };
};

export default connect(mapStateToProps)(Tutorial);
