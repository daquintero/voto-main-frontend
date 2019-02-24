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

  render() {
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
                <div className="navbar__nav__item">
                  <Link className="navbar__nav__link" to="/">News</Link>
                </div>
                <div className="navbar__nav__item">
                  <Link className="navbar__nav__link" to="/">Corruption</Link>
                </div>
                <div className="navbar__nav__item">
                  <Link className="navbar__nav__link" to="/">Candidates</Link>
                </div>
                <div className="navbar__nav__item">
                  <Link className="navbar__nav__link" to="/">Explore</Link>
                </div>
              </div>
            </Collapse>
            <NavbarToggler
              onClick={this.toggleNavbar}
              className="mr-2"
            />
          </Container>
        </Navbar>
      </>
    );
  }
}

export default TopBar;
