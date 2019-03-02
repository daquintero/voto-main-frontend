// Not Found Card
import React, { PureComponent } from 'react';
import { Card, Row, Col, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import typeInfo from '../../../shared/utils/typeInfo';

// Declaration
class NFCard extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    parent: PropTypes.string.isRequired,
    light: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  openMore = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  render() {
    const { type, parent, light } = this.props;
    const { open } = this.state;
    return (
      <Row noGutters className="justify-content-center align-content-center span-all border-0 rounded-0">
        <Col sm={12} >
          <Card onClick={this.openMore} className={`border-0 ${light ? 'bg-layout' : 'bg-shady-layout'}`}>
            <p className="m-1 px-2 small text-center">
                Ahora mismo no hay {typeInfo[type].name} {typeInfo[parent].singular}.
            </p>
            <p className="lead text-center mt-1 mx-1">
              ¿Quieres contribuir?
              <i
                className={`fal ${open ? 'fa-caret-up text-info' : 'fa-caret-down text-primary'} px-2`}
              />
            </p>
            <CardBody className={`bg-light p-2 ${open ? '' : 'd-none'}`}>
              <a href="https://studio.votoinformado2019.com" className="sl">
                <p className="m-0 p-1 text-center">
                  <i className="fal fa-search px-2" /> Investiga y anota fuentes creíbles que encuentres.
                </p>
                <p className="m-0 p-1 text-center">
                  <i className="fal fa-sign-in-alt px-2" /> ¡Entra a VotoStudio tocándome y contribuye!
                </p>
                <p className="m-0 p-1 text-center">
                  <i className="fal fa-check-square px-2" /> Y lo verifícaremos contra el fake news.
                </p>
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

// TODO State Store Connection
export default NFCard;
