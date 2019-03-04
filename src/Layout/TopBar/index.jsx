// Absolute Imports
import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Functions
// import imageUrl from '../../shared/utils/imageUrl';

import logo from './favicon.ico';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      currentTab: '1',
    };
  }

  onClick = () => {
    this.setState(prevState =>
      ({ test: !prevState.test }));
  };

  toggleNavbar = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  };

  handleOnHover = (e) => {
    e.persist();
    const { id } = e.currentTarget.dataset;
    this.setState({ currentTab: id });
  };

  handleOnMouseLeave = () => {
    this.setState({
      currentTab: '1',
    });
  };

  renderSubNav = () => {
    const { currentTab } = this.state;
    switch (currentTab) {
      case '1':
        return (
          <div className="navbar__subnav__wrapper one">
            <Container>
              <div className="navbar__subnav__head">
                <h3>Hi</h3>
              </div>
            </Container>
          </div>
        );
      case '2':
        return (
          <div className="navbar__subnav__wrapper one">
            <Container>
              <div className="navbar__subnav__head">
                <h3>News</h3>
              </div>
            </Container>
          </div>
        );
      case '3':
        return (
          <div className="navbar__subnav__wrapper two">
            <Container>
              <div className="navbar__subnav__head">
                <h3>Corruption</h3>
              </div>
            </Container>
          </div>
        );
      case '4':
        return (
          <div className="navbar__subnav__wrapper three">
            <Container>
              <div className="navbar__subnav__head">
                <h3>Candidates</h3>
              </div>
            </Container>
          </div>
        );
      default:
        return (
          <></>
        );
    }
  };
  render() {
    // State
    const {
      currentTab,
    } = this.state;
    return (
      <>
        <Navbar light expand="md" className="navbar fixed-top p-0">
          <Container className="navbar__wrapper bg-white">
            <NavbarBrand href="/" className="navbar__brand d-inline">
              <h4 className="p-1 m-0"><img className="img-fluid px-2" src={logo} alt="" />#VotoInformado2019</h4>
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleNavbar}
              className="mr-4"
            />
            <Collapse isOpen={!this.state.collapsed} navbar className="justify-content-center">
              <div
                className="navbar__nav__wrapper bg-white justify-content-center"
                onMouseLeave={this.handleOnMouseLeave}
              >
                <div
                  className={classNames('navbar__nav__item one', { active: currentTab === '2' })}
                  data-id="2"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/">Mapa</Link>
                </div>
                <div
                  className={classNames('navbar__nav__item two', { active: currentTab === '3' })}
                  data-id="3"
                  onMouseEnter={this.handleOnHover}
                >
                  <div className="navbar__nav__link" >
                    {/* TODO remove coloring */}
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://s3.amazonaws.com/votoinformado2019/Manual_Voto_Informado_2019.pdf"
                    >
                      Manual
                    </a>
                  </div>
                </div>
                <div
                  className={classNames('navbar__nav__item three', { active: currentTab === '4' })}
                  data-id="4"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/acerca">Nosotros</Link>
                </div>
                <div
                  className={classNames('navbar__nav__item end three', { active: currentTab === '5' })}
                  data-id="5"
                  onMouseEnter={this.handleOnHover}
                >
                  <a className="navbar__nav__link" href="https://studio.votoinformado2019.com">
                    <i className="fal fa-user-circle" />
                  </a>
                </div>
              </div>
            </Collapse>
          </Container>
        </Navbar>
        {/* TODO ADD THIS LATER SINCE NOT MANY PAGES SO FAR */}
        {/* {this.renderSubNav()} */}
      </>
    );
  }
}
export default TopBar;
