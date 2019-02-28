// Absolute Imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Modal } from 'reactstrap';

// Components
import MainGrid from './components/Main';
import TopBanner from './components/TopBanner';
import AboutPage from '../AboutUsPage/components/Page';


class Home extends PureComponent {
  static propTypes = {
    mainResults: PropTypes.arrayOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      firstVisit: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    // State
    const {
      firstVisit,
    } = this.state;

    // Props
    const {
      mainResults,
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
          <MainGrid instances={mainResults} />
        </Container>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  const { instances } = state.home;

  return {
    instances,
  };
};

export default connect(mapStateToProps)(Home);
