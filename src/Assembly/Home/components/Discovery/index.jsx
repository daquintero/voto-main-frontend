// Absolute Imports
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classNames from 'classnames';

// Components
import DiscoverCandidates from './components/DiscoverCandidates';
import DataVisualization from './components/DataVisualization';

const selectPartyPerYear = {
  1994: [
    { ValidVotes: 'Total' },
    { Arnulfista: 'Mireya  Moscoso - Partido Arnulfista' },
    { PRD: 'Ernesto Pérez Balladares - PRD' },
    { Y: 'Ruben Carles - Partido Y' },
    { MPE: 'Ruben Blades -MPE' },
    { Solidaridad: 'Samuel Galindo - Solidaridad' },
    { PDC: 'Eduardo Vallarino- PDC' },
    { PPD: 'Jose Muñoz - PPD' },
  ],
  2004: [
    { ValidVotes: 'Total' },
    { Arnulfista: 'Jose Miguel Alemán-Arnulfista' },
    { PRD: 'Martin Torrijos-PRD' },
    { Solidaridad: 'Guillermo Endara-Solidaridad' },
    { CD: 'Ricardo Martinelli - CD' },
  ],
  2009: [
    { ValidVotes: 'Total' },
    { PRD: 'Balbina Herrera-PRD' },
    { VMP: 'Guillermo Endara-Vanguardia Moral de la Patria' },
    { CD: 'Ricardo Martinelli - CD' },
  ],
  2014: [
    { ValidVotes: 'Total' },
    { PRD: 'Juan Carlos Navarro- PRD' },
    { Arnulfista: 'Juan Carlos Varela - Panameñismo' },
    { FAD: 'Genaro López - FAD' },
    { CD: 'José Domingo Arias- CD' },
    { Celeste: 'Esteban Rodríguez- Celeste' },
    { Verde: 'Gerardo Barroso- Verde' },
    { Chocolate: 'Juan Jované- Chocolate' },
  ],
};

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: '1',
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
              <DataVisualization />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Discover;
