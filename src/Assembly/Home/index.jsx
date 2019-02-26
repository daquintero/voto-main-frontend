/* eslint-disable */
// Home Page
// Libraries
import React, { PureComponent } from 'react';
import { Container } from 'reactstrap';
import ReactJoyride, { STATUS } from 'react-joyride';

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
      run: false,
      steps: [
        {
          content: <AboutPage />,
          placement: 'center',
          locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
          target: 'body',
        },
      ],
    };
  }

  handleJoyrideCallback = data => {
    const { status, type } = data;

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      this.setState({ run: false });
    }

    console.groupCollapsed(type);
    console.log(data);
    console.groupEnd();
  };

  render() {
    const { run, steps } = this.state;
    const { mainResults, searchResults } = this.props;
    return (
      <>
        <ReactJoyride
          callback={this.handleJoyrideCallback}
          continuous
          run={run}
          scrollToFirstStep
          showProgress
          showSkipButton
          steps={steps}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
        <Container fluid className="hey p-0">
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
