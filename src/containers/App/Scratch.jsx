// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import Card from '../Reusable/CorruptionCase/components/Card';

// Each Compendium
const info = {
  title: 'Whatsup asdn amsda jasd nas dn asnd ',
  date: new Date(),
  images: [{
    image: 'jjj',
  }],
  statistics: [{
    link: 'jjj',
    title: 'informacion',
    data: 'jjj',
    icon: 'user',
  }],
};

const Scratch = () => (
  <div className="layout">
    <Card info={info} />
  </div>
);

export default Scratch;
