/* eslint-disable */
// Home Page
// Libraries
import React, { PureComponent } from 'react';
import { Container, Modal } from 'reactstrap';

// Prop Types
import PropTypes from 'prop-types';

// Components
import MainGrid from './components/Main';
import Search from './components/Search';
import TopBanner from './components/TopBanner';

// TODO REMOVE TEST
import AboutPage from '../AboutUsPage/components/Page'

// Declaration
class Home extends PureComponent {
  static propTypes = {
    mainResults: PropTypes.arrayOf(Object).isRequired,
    searchResults: PropTypes.arrayOf(Object).isRequired,
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
      modal: !prevState.modal
    }));
  }


  render() {
    const { mainResults, searchResults } = this.props;
    const { firstVisit } = this.state;
    return (
      <>
        <Modal isOpen={firstVisit} toggle={this.toggle}>
          <AboutPage />
        </Modal>
        <Container fluid className="p-0">
          <TopBanner />
        </Container>
        <Container>
          <MainGrid instances={mainResults} />
          <Search instances={searchResults} />
        </Container>
      </>
    );
  }
}

// TODO State Store Connection
export default Home;
