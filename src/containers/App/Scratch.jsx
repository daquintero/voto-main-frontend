// Main Scratch Indexing Container for all of the Routes
import React from 'react';
import { Container } from 'reactstrap';
import Table from '../Reusable/FinanceItem/components/Table/index';

// TODO REMOVE IMAGE TEST
// const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// // One Card
const one = {
  instances: [
    {
      modelLabel: 'corruption.InformativeSnippet',
      user: 1,
      tableValues: {
        id: 6,
        descriptors: [
          {
            name: 'title',
            value: 'Two',
            type: '',
          },
          {
            name: 'amount',
            value: 49849494,
            type: '',
            numeric: true,
          },
          {
            name: 'source',
            value: 'https://test-voto-backend.herokuapp.com/admin/calendars/event/add/',
            type: 'link',
          },
        ],
        userEmail: 'jw17202@bristol.ac.uk',
        userId: 1,
        appLabel: 'corruption',
        modelName: 'informativesnippet',
        modelLabel: 'corruption.InformativeSnippet',
      },
      id: 6,
      dateCreated: '2019-02-07T01:03:11.662971+00:00',
      tracked: true,
      title: '',
      longDescription: '<p></p>',
      refresh: true,
    },
    {
      modelLabel: 'corruption.InformativeSnippet',
      user: 1,
      tableValues: {
        id: 1,
        descriptors: [
          {
            name: 'title',
            value: 'dfgdsfgsdfg',
          },
          {
            name: 'amount',
            value: 122992929,
            numeric: true,
          },
          {
            name: 'source',
            value: 'https://test-voto-backend.herokuapp.com/admin/calendars/event/add/',
            type: 'link',
          },
        ],
        userEmail: 'jw17202@bristol.ac.uk',
        userId: 1,
        appLabel: 'corruption',
        modelName: 'informativesnippet',
        modelLabel: 'corruption.InformativeSnippet',
      },
      id: 1,
      dateCreated: '2019-02-06T23:58:12.222078+00:00',
      tracked: true,
      title: '',
      longDescription: '<p></p>',
      refresh: true,
    },
  ],
  tableHeads: [
    {
      id: 'title',
      numeric: false,
      disablePadding: false,
      label: 'Title',
    },
    {
      id: 'amount',
      numeric: true,
      disablePadding: false,
      label: 'Amount',
    },
    {
      id: 'source',
      numeric: false,
      disablePadding: false,
      label: 'Source',
    },
  ],
  modelLabel: 'corruption.InformativeSnippet',
  modelName: 'informativesnippet',
  verboseName: 'informative snippet',
};

// // Each Compendium
// const info = [{
//   id: 1,
//   size: 'full',
//   name: 'Carlos Perez Herrera',
//   alias: 'alias',
//   images: [{
//     image: imageTest,
//   }],
//   corruptionIndex: {
//     change: false,
//     value: 33,
//   },
// }, {
//   id: 2,
//   size: 'full',
//   name: 'Laurentino Cortizo',
//   alias: 'alias',
//   corruptionIndex: {
//     change: false,
//     value: 4.43,
//   },
// }, {
//   id: 3,
//   size: 'full',
//   name: 'Laurentino Cortizo',
//   alias: 'alias',
//   images: [{
//     image: imageTest,
//   }],
//   corruptionIndex: {
//     change: true,
//     value: 5.53,
//   },
// }, {
//   id: 4,
//   size: 'full',
//   name: 'Laurentino Cortizo',
//   alias: 'alias',
//   corruptionIndex: {
//     change: true,
//     value: 34.5,
//   },
// }];

const Scratch = () => (
  <div className="layout">
    <Container>
      <Table field={one} />
    </Container>
  </div>
);

export default Scratch;
