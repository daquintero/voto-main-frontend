import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

// TODO create the pagination and grid system
class InformativeCardGrid extends Component {
  static propTypes = {
    hi: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      test: false,
    };
  }
  onClick = () => {
    this.setState(prevState => ({ test: !prevState.test }));
  };
  toggleMoreInfo = (type) => {
    if (type === this.state.active) {
      this.setState({ active: '' });
    } else {
      this.setState({ active: type });
    }
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {this.props.hi}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default InformativeCardGrid;
