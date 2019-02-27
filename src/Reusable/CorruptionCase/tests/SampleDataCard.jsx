// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import CardGrid from '../Reusable/CorruptionCase/components/BootCardGrid';

// TODO REMOVE IMAGE TEST
const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// // One Card
// const one = [{
//   id: 1,
//   size: 'full',
//   title: 'Whatsup asdn amsda jasd nas dn asnd ',
//   date: new Date(),
//   images: [{
//     image: imageTest,
//   }],
//   statistics: [{
//     link: 'jjj',
//     title: 'informacion',
//     data: '10',
//     icon: 'user',
//   },
//   {
//     link: 'jjj',
//     title: 'informacion',
//     data: '10',
//     icon: 'user',
//   },
//   ],
// }];

// Each Compendium
const info = [{
  id: 1,
  size: 'full',
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  images: [{
    image: imageTest,
  }],
  statistics: [{
    id: 1,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  },
  {
    id: 2,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  },
  ],
}, {
  id: 2,
  size: 'full',
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  statistics: [{
    id: 3,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
}];

const Scratch = () => (
  <div className="layout">
    <CardGrid info={info} />
  </div>
);

export default Scratch;
