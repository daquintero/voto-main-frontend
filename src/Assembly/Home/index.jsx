// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';

// Components
import AboutPage from '../AboutUsPage/components/Page';
import CardRow from '../../Reusable/CardRow';

// Actions
import { getHome } from './redux/actions';


class Home extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    informativeSnippets: PropTypes.instanceOf(Array).isRequired,
    actions: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      firstVisit: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getHome());
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    // State
    const {
      firstVisit,
    } = this.state;

    // Props
    const {
      informativeSnippets, actions,
    } = this.props;

    return (
      <div className="home__wrapper">
        <Modal isOpen={firstVisit} toggle={this.toggle}>
          <AboutPage />
        </Modal>
        <Container>
          {actions.GET_HOME.loaded && (
            <CardRow instances={informativeSnippets} />
          )}
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { actions } = state.home;
  const { informativeSnippets } = state.home.content;

  return {
    informativeSnippets,
    actions,
  };
};

export default connect(mapStateToProps)(Home);
