// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import CardGrid from '../Reusable/Individual/components/CardGrid';

// TODO REMOVE IMAGE TEST
const imageTest = `${process.env.PUBLIC_URL}/img/logo.svg`;

// Each Compendium
const info = [{
  id: 1,
  size: 'full',
  name: 'Carlos Perez Herrera',
  alias: 'alias',
  images: [{
    image: imageTest,
  }],
  corruptionIndex: {
    change: false,
    value: 33,
  },
}, {
  id: 2,
  size: 'full',
  name: 'Laurentino Cortizo',
  alias: 'alias',
  corruptionIndex: {
    change: false,
    value: 4.43,
  },
}, {
  id: 3,
  size: 'full',
  name: 'Laurentino Cortizo',
  alias: 'alias',
  images: [{
    image: imageTest,
  }],
  corruptionIndex: {
    change: true,
    value: 5.53,
  },
}, {
  id: 4,
  size: 'full',
  name: 'Laurentino Cortizo',
  alias: 'alias',
  corruptionIndex: {
    change: true,
    value: 34.5,
  },
}];

const Scratch = () => (
  <div className="layout">
    <CardGrid instances={info} />
  </div>
);

export default Scratch;
