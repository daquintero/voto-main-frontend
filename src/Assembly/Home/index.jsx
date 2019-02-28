// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';

// Components
// import MainGrid from './components/Main';
import TopBanner from './components/TopBanner';
import AboutPage from '../AboutUsPage/components/Page';
import CardRow from '../../Reusable/CardRow';

// Actions
import { getHome } from './redux/actions';


class Home extends PureComponent {
  static propTypes = {
    // Redux
    dispatch: PropTypes.func.isRequired,
    informativeSnippets: PropTypes.instanceOf(Array).isRequired,
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
      informativeSnippets,
    } = this.props;

    return (
      <>
        <Modal isOpen={firstVisit} toggle={this.toggle}>
          <AboutPage />
        </Modal>
        <div className="bg-shady-layout">
          <Container className="p-0">
            <TopBanner />
          </Container>
        </div>
        <Container>
          <CardRow instances={informativeSnippets} />
        </Container>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  const { informativeSnippets } = state.home.content;

  return {
    informativeSnippets,
  };
};

export default connect(mapStateToProps)(Home);
