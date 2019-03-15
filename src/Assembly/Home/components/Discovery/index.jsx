// Map candidates Discovery
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Input } from 'reactstrap';
import classNames from 'classnames';

// Components
import DiscoverCandidates from './components/DiscoverCandidates';

import { discoverCandidates } from '../../redux/actions';
import Map from '../../../../Reusable/Map';


// Data
import layerData from '../../data/data.json';
import hexData from '../../data/hex.json';

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
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

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

  handleOnClick = (e, type) => {
    const { dispatch } = this.props;
    const gid = e.object.properties[type];
    dispatch(discoverCandidates(gid));
  };

  handleOnHover = () => {
    // Pass
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
                      {selectPartyPerYear[year].map(partyObj => (
                        <option value={Object.keys(partyObj)[0]} key={Object.keys(partyObj)[0]}>
                          {partyObj[Object.keys(partyObj)[0]]}
                        </option>
                      ))}
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


const mapStateToProps = () => {};

export default connect(mapStateToProps)(Discover);
