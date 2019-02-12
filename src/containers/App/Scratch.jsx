// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Reusable/CorruptionCase/components/Page/Header';

// TODO REMOVE IMAGE TEST
// const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// One Card
const basic = {
  title: 'This corruption case',
  description: 'Some bries description of this information to make sure we are on the same page',
  longDescription: 'Some bries description of this information to make sure we are on the same page',
};

// // Each Compendium
// const info = [{
//   original: imageTest,
//   thumbnail: imageTest,
//   description: 'Render custom slides within the gallery',
// }, {
//   original: imageTest,
//   thumbnail: imageTest,
//   description: 'test',
// }, {
//   original: imageTest,
//   thumbnail: imageTest,
//   description: 'test',
// }, {
//   original: imageTest,
//   thumbnail: imageTest,
//   description: 'test',
// }];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col>
          <Header basic={basic} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
