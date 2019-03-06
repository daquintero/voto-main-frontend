// Map candidates Discovery
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col, Input } from 'reactstrap';
import classNames from 'classnames';

// Components
import CardGrid from '../../../Reusable/Grid/components/DetailedReduxCardGrid';

import { discoverCandidates } from '../redux/actions';
import Map from '../../../Reusable/Map';


// Data
import mapData from '../data/mapDatav4.json';
import voteData from '../data/ELECTORAL_CIRCUITS_V3.json';
import layerData from '../data/data.json';


class Discover extends Component {
  static propTypes = {
    candidates: PropTypes.instanceOf(Object).isRequired,
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

  render() {
    // State
    const {
      currentTab, party, year,
    } = this.state;

    // Props
    const {
      candidates,
    } = this.props;

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
                <h4 className="py-2 m-0 text-center">
                  <i className="fal fa-podium-star" />
                  {' '}¡Descúbre tus Candidatos!
                </h4>
              </div>
              <div
                className={classNames('map__tab-panel__item', { active: currentTab === '2' })}
                role="presentation"
                onClick={this.handleOnChangeTab}
                data-tab="2"
              >
                <h4 className="py-2 m-0 text-center">
                  <i className="fal fa-vote-yea" />
                  {' '}Votos Históricos - Presidente
                </h4>
              </div>
            </div>
            {currentTab === '1' && (
              <div className="map__tab__wrapper">
                <Map
                  data={mapData}
                  type="GID_1"
                  onClick={this.handleOnClick}
                  selector
                />
                <CardGrid
                  parentModelLabel="political.Individual"
                  relatedModelLabel="noneType"
                  subsetNumber={0}
                  light
                  instances={candidates}
                  gridClass="candidates-grid"
                />
              </div>
            )}
            {currentTab === '2' && (
              <div className="map__tab__wrapper">
                <Map
                  data={voteData}
                  layerData={layerData}
                  type="CIRCUITO"
                  layerFilters={{ party, year }}
                  onClick={this.handleOnClick}
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


const mapStateToProps = (state) => {
  const { candidates } = state.home.discover;

  return {
    candidates,
  };
};

export default connect(mapStateToProps)(Discover);
