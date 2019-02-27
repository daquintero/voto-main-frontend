// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import CardGrid from '../Reusable/Individual/components/BootCardGrid';

// TODO REMOVE IMAGE TEST
const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// // One Card
// const one = [{
//   id: 1,
//   size: 'full',
//   name: 'Whatsup asdn amsda jasd nas dn asnd ',
//   date: new Date(),
//   images: [{
//     image: imageTest,
//   }],
//   statistics: [{
//     link: 'jjj',
//     name: 'informacion',
//     data: '10',
//     icon: 'user',
//   },
//   {
//     link: 'jjj',
//     name: 'informacion',
//     data: '10',
//     icon: 'user',
//   },
//   ],
// }];

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
    <CardGrid info={info} />
  </div>
);

export default Scratch;
