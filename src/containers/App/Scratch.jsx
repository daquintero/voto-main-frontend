// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container } from 'reactstrap';
import Header from '../Reusable/CorruptionCase/components/Page/Header';

// TODO REMOVE IMAGE TEST
// const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// // One Card
// const one = [{
//   original: imageTest,
//   thumbnail: imageTest,
//   description: 'test',
// }];

// // Each Compendium
// const info = [{
//   original: imageTest,
//   thumbnail: imageTest,
//   embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
//   description: 'Render custom slides within the gallery',
//   type: 'video',
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
      <Header />
    </Container>
  </div>
);

export default Scratch;
