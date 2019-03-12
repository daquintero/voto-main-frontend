// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import HtmlReactParser from 'html-react-parser';

// Actions
import { getKnowledgeBaseDetail } from '../redux/actions';

// Components
import Loader from '../../../shared/components/Loader';

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
            <h2>{instance.title}</h2>
            <p>{instance.summary}</p>
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
