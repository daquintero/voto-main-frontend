// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import Header from '../Assembly/DetailedPage/components/Individual/Header';

const data = {
  name: 'ajsdkfabknsdjf',
  briefDescription: 'this is a test of a test since this is a test of a test since this is a test of a test since' +
    ' this is a test of a test since this is a test of a test since this is a test of a test since ' +
    'this is a test of a test since this is a test of a test since this is a test of a test since',
  alias: 'Laurentino',
};

const Scratch = () => (
  <div className="layout">
    <Header instance={data} />
  </div>
);

export default Scratch;
