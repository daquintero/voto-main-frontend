// Map candidates Discovery
import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import classNames from 'classnames';

// Components
import DiscoverCandidates from './components/DiscoverCandidates';

import Map from '../../../../Reusable/Map';

// Data
import layerData from '../../data/data.json';
import hexData from '../../data/hex.json';


class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: '1',
      party: 'ValidVotes',
      year: '2014',
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
      currentTab, party, year,
    } = this.state;

    return (
      <Container>
        <Row noGutters className="m-4">
          <Col md={12} className="py-4">
            <div className="map__tab-panel__wrapper">
              <div
                className={classNames('map__tab-panel__item', { active: currentTab === '1' })}
                role="presentation"
                onClick={this.handleOnChangeTab}
                data-tab="1"
              >
                <h5 className="py-2 m-0 text-center">
                  <i className="fal fa-podium" />
                  {' '}Descúbre tus Candidatos
                </h5>
              </div>
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
            </div>
            {currentTab === '1' && (
              <DiscoverCandidates />
            )}
            {currentTab === '2' && (
              <div className="map__tab__wrapper">
                <Map
                  data={hexData}
                  layerData={layerData}
                  type="CIRCUITO"
                  layerFilters={{ party, year }}
                >
                  <div className="map__scale__wrapper">
                    <div className="map__scale__strip" />
                    <span className="many">100%</span>
                    <span className="few">0%</span>
                  </div>
                </Map>
                <div className="map__control-panel__wrapper">
                  <div className="map__control-panel__select__wrapper">
                    <Input
                      name="party"
                      type="select"
                      onChange={this.handleOnChange}
                    >
                      <option value="ValidVotes">Total</option>
                      <option value="Arnulfista">Arnulfista</option>
                      <option value="Y">Y</option>
                      <option value="Solidaridad">Solidaridad</option>
                      <option value="PRD">PRD</option>
                      <option value="PDC">PDC</option>
                      <option value="PPD">PPD</option>
                      <option value="MPE">MPE</option>
                    </Input>
                    <span>Partido</span>
                  </div>
                  <div className="map__control-panel__select__wrapper">
                    <Input
                      name="year"
                      type="select"
                      onChange={this.handleOnChange}
                    >
                      <option value="2014">2014</option>
                      <option value="2009">2009</option>
                      <option value="2004">2004</option>
                      <option value="1994">1994</option>
                    </Input>
                    <span>Año</span>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Discover;
