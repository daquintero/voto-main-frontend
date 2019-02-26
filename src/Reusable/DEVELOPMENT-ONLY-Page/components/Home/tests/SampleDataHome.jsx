// Main Scratch Indexing Container for all of the Routes
//
import React from 'react';
import { Container } from 'reactstrap';

import Home from '../Reusable/DEVELOPMENT-ONLY-Page/components/Home';

// TODO REMOVE IMAGE TEST
const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;


// Test Sample Data
const data = [{
  id: 2,
  type: 'corruption.CorruptionCase',
  size: 'full',
  title: 'Whatsup asfffszdn amsda jasd nas dn asnd ',
  date: new Date(),
  statistics: [{
    id: 3,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
}, {
  id: 3,
  type: 'corruption.CorruptionCase',
  size: 'full',
  title: 'Whatsup asddddn amsda jasd nas dn asnd ',
  date: new Date(),
  images: [{
    image: imageTest,
  }],
  statistics: [{
    id: 3,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
}, {
  id: 6,
  type: 'corruption.InformativeSnippet',
  size: 'half',
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  images: [{
    image: imageTest,
  }],
  statistics: [{
    id: 3,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
}, {
  id: 2,
  size: 'half',
  type: 'political.Individual',
  name: 'Laurentino Cortizo',
  alias: 'alias',
  images: [{
    image: imageTest,
  }],
}, {
  size: 'full',
  title: 'Alguna Information asdfasd ',
  type: 'Employment',
  description: 'Descripcion',
  organization: 'Some organization',
},
{
  id: 3,
  size: 'half',
  type: 'political.Individual',
  name: 'Laurentino Cortizo',
  alias: 'alias',
  images: [{
    image: imageTest,
  }],
}, {
  id: 6,
  type: 'corruption.InformativeSnippet',
  size: 'half',
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  images: [{
    image: imageTest,
  }],
  statistics: [{
    id: 3,
    link: 'jjj',
    title: 'informacion',
    data: '10',
    icon: 'user',
  }],
},
{
  type: 'political.Statistic',
  size: 'half',
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
},
{
  type: 'political.Statistic',
  size: 'half',
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
},
{
  type: 'political.Statistic',
  size: 'half',
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
},
{
  type: 'political.Statistic',
  size: 'half',
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
},
{
  type: 'political.Statistic',
  size: 'half',
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
},
{
  type: 'political.Statistic',
  size: 'half',
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
},
];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Home mainResults={data} searchResults={data} />
    </Container>
  </div>
);

export default Scratch;
