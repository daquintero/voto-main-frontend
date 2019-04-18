// Absolute Imports
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classNames from 'classnames';

// Components
import DiscoverCandidates from './components/DiscoverCandidates';
import DataVisualization from './components/DataVisualization';


class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: '2',
    };
  }

  handleOnChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnChangeTab = (e) => {
    const { tab } = e.currentTarget.dataset;
    this.setState({
      currentTab: tab,
    });
  };

  render() {
    // State
    const {
      currentTab,
    } = this.state;

    return (
      <Container>
        <Row noGutters className="m-0 m-md-4">
          <Col md={12} className="py-4">
            <div className="map__tab-panel__wrapper">
              <div
                className={classNames('map__tab-panel__item', { active: currentTab === '2' })}
                role="presentation"
                onClick={this.handleOnChangeTab}
                data-tab="2"
              >
                <h5 className="py-2 m-0 text-center">
                  <i className="fal fa-vote-yea" />
                  {' '}Votos Históricos - Presidente
                </h5>
              </div>
              <div
                className={classNames('map__tab-panel__item', { active: currentTab === '1' })}
                role="presentation"
                onClick={this.handleOnChangeTab}
                data-tab="1"
              >
                <h5 className="py-2 m-0 text-center">
                  <i className="fal fa-podium" />
                  {' '}Diputados por Circuito
                </h5>
              </div>
            </div>
            {currentTab === '1' && (
              <DiscoverCandidates />
            )}
            {currentTab === '2' && (
              <DataVisualization />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Discover;
