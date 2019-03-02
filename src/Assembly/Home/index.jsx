// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';

// Components
import AboutPage from '../AboutUsPage/components/Page';
import CardRow from '../../Reusable/CardRow';
import TopBanner from './components/TopBanner';
import Map from '../../Reusable/Map';
import Search from './components/Search';

// Actions
import { getHome, openFirstVisit } from './redux/actions';


class Home extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    informativeSnippets: PropTypes.instanceOf(Array).isRequired,
    actions: PropTypes.instanceOf(Object).isRequired,
    firstVisit: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  componentDidMount() {
    const { dispatch, firstVisit } = this.props;
    dispatch(getHome());

    if (firstVisit === true) {
      dispatch(openFirstVisit());
      this.openFirstVisit();
    }
  }
  openFirstVisit = () => {
    this.setState(({
      modal: true,
    }));
  };
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };
  render() {
    // Props
    const {
      informativeSnippets, actions,
    } = this.props;
    const { modal } = this.state;

    return (
      <div className="home__wrapper">
        <Modal isOpen={modal} toggle={this.toggle}>
          <AboutPage />
        </Modal>
        <div className="home__top-banner__wrapper">
          <Container>
            <TopBanner />
          </Container>
        </div>
        <div className="home__news__wrapper py-5">
          <Container>
            {actions.GET_HOME.loaded && (
            <CardRow instances={informativeSnippets} />
         )}
          </Container>
        </div>
        <div className="home__map__wrapper">
          <Container className="py-5">
            <Map />
          </Container>
        </div>
        <div>
          <Container className="py-2">
            <Search />
          </Container>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { actions, firstVisit } = state.home;
  const { informativeSnippets } = state.home.content;

  return {
    informativeSnippets,
    firstVisit,
    actions,
  };
};

export default connect(mapStateToProps)(Home);
