// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import Header from '../Reusable/CorruptionCase/components/CorruptionCase/Header';
import VIGallery from '../components/VIGallery';

// TODO REMOVE IMAGE TEST
const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// // One Card
// const one = [{
//   original: imageTest,
//   thumbnail: imageTest,
//   description: 'test',
// }];

// // Each Compendium
const info = [{
  original: imageTest,
  thumbnail: imageTest,
  description: 'Render custom slides within the gallery',
}, {
  original: imageTest,
  thumbnail: imageTest,
  description: 'test',
}, {
  original: imageTest,
  thumbnail: imageTest,
  description: 'test',
}, {
  original: imageTest,
  thumbnail: imageTest,
  description: 'test',
}];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Row>
        <Col xs={3}>
          <VIGallery data={info} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Scratch;
