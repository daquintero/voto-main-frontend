// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
} from 'reactstrap';

// Actions
import { getKnowledgeBaseFeed, searchKnowledgeBase } from '../redux/actions';

// Components
import Loader from '../../../shared/components/Loader';
import FeedSearch from '../components/FeedSearch';
import TutorialCard from '../components/TutorialCard';


class Feed extends PureComponent {
  static propTypes = {
    // Redux
    actions: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    instances: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    instances: [],
  };

  componentDidMount() {
    // Grab Knowledge Base feed
    const { dispatch } = this.props;
    dispatch(getKnowledgeBaseFeed());
  }

  handleSearch = (query) => {
    const { dispatch } = this.props;
    dispatch(searchKnowledgeBase({
      query,
    }));
  };

  render() {
    // Props
    const {
      actions: { GET_KNOWLEDGE_BASE_FEED }, instances,
    } = this.props;

    return (
      <Container>
        <div className="knowledge-base__feed__wrapper">
          <div className="knowledge-base__feed__search">
            <FeedSearch
              // Callbacks
              search={this.handleSearch}
            />
          </div>
          <div className="knowledge-base__feed">
            {GET_KNOWLEDGE_BASE_FEED.loading ? (
              <Loader elemClass="load__page" />
            ) : instances.map(instance => (
              <TutorialCard
                key={instance.id}
                instance={instance}
              />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  const { actions } = state.knowledgeBase;
  const { instances } = state.knowledgeBase.feed;

  return {
    actions,
    instances,
  };
};

export default connect(mapStateToProps)(Feed);
