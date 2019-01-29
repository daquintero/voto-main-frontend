// Index container for the TopBar
import React, { Component } from 'react';
// Imported in order of usage in the reactstrap model
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
} from 'reactstrap';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
    // Binding function so no undefined exists upon inatilazaiton TODO improve binding toggleNavBar
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  onClick = () => {
    this.setState(prevState =>
      ({ test: !prevState.test }));
  };
  toggleNavbar() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          {/* Main Info and Functions for Dropdown NavBar */}
          <NavbarBrand href="/">
            LOGO HERE
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleNavbar}
            className="mr-2"
          />
          {/* Dropdown Links - can be taken
          into new file later if it expands */}
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav>
              Will add as I go building
              {/* Will add as I go building */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
