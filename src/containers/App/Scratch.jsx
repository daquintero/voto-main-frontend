// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import CardGrid from '../Reusable/InformativeSnippet/components/CardGrid';

// TODO REMOVE IMAGE TEST
const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// Each Compendium
const info = [{
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  images: [{
    image: imageTest,
  }],
  statistics: [{
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  },
  {
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  },
  ],
}, {
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  images: [{
    image: imageTest,
  }],
  statistics: [{
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
},
{
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  statistics: [{
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
},
{
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  images: [{
    image: imageTest,
  }],
  statistics: [{
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
