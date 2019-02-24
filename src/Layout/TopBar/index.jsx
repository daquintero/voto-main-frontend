// Absolute Imports
import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Functions
// import imageUrl from '../../shared/utils/imageUrl';


class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
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

  renderSubNav = () => {
    const { currentTab } = this.state;
    switch (currentTab) {
      case '1':
        return (
          <div className="navbar__subnav__wrapper one">
            <Container>
              <div className="navbar__subnav__head">
                <h3>News</h3>
              </div>
            </Container>
          </div>
        );
      case '2':
        return (
          <div className="navbar__subnav__wrapper two">
            <Container>
              <div className="navbar__subnav__head">
                <h3>Corruption</h3>
              </div>
            </Container>
          </div>
        );
      case '3':
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
        <Navbar light expand="md" className="navbar">
          <Container className="navbar__wrapper">
            <NavbarBrand href="/" className="navbar__brand">
              VI
            </NavbarBrand>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <div className="navbar__search__wrapper">
                <form className="navbar__search__form">
                  <Input
                    className="navbar__search__input"
                    type="text"
                    placeholder="Buscar"
                  />
                  <div className="navbar__search__icon">
                    <i className="fal fa-search" />
                  </div>
                </form>
              </div>
              <div className="navbar__nav__wrapper">
                <div
                  className={classNames('navbar__nav__item one', { active: currentTab === '1' })}
                  data-id="1"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/">News</Link>
                </div>
                <div
                  className={classNames('navbar__nav__item two', { active: currentTab === '2' })}
                  data-id="2"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/">Corruption</Link>
                </div>
                <div
                  className={classNames('navbar__nav__item three', { active: currentTab === '3' })}
                  data-id="3"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/">Candidates</Link>
                </div>
                <div
                  className={classNames('navbar__nav__item four', { active: currentTab === '4' })}
                  data-id="4"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/">Explore</Link>
                </div>
                <div
                  className={classNames('navbar__nav__item five end', { active: currentTab === '5' })}
                  data-id="5"
                  onMouseEnter={this.handleOnHover}
                >
                  <Link className="navbar__nav__link" to="/">About</Link>
                </div>
              </div>
            </Collapse>
            <NavbarToggler
              onClick={this.toggleNavbar}
              className="mr-2"
            />
          </Container>
        </Navbar>
        {this.renderSubNav()}
      </>
    );
  }
}

export default TopBar;
