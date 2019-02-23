// Absolute Imports
import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  Input,
} from 'reactstrap';

// Functions
import imageUrl from '../../shared/utils/imageUrl';


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
              <img
                src={imageUrl('img', 'logo.svg')}
                alt="Banner"
                className="navbar__logo img-fluid"
              />
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
              <NavbarToggler
                onClick={this.toggleNavbar}
                className="mr-2"
              />
              <Nav className="navbar-nav-scroll justify-content-center p-1" navbar>
                <div />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default TopBar;
