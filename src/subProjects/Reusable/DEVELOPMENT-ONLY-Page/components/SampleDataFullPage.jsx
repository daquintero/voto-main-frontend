// Utils

export const imageTest = `${process.env.PUBLIC_URL}/img-test/a.jpg`;

// ----------------- HEADER ------------------
export const headerData = {
  basic: {
    title: 'This corruption case',
    description: 'Some bries description of this information to make sure we are on the same page',
    longDescription: 'Some bries description of this information to make sure we are on the same page',
    corruptionRelatedFunds: 12121233.21,
    nonCorruptionRelatedFunds: 123232121.1,
  },
};

// ----------------- GALLERY ----------------------


// // Each Compendium
export const galleryData = [{
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

// ---------------- STATISTICS --------------------

export const statisticsData = [{
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 1000,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 1000,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 1000,
  icon: 'user',
}, {
  name: 'Some statistic',
  source: 'info',
  value: 10,
  icon: 'user',
}];

// ---------- FINANCIAL DATA --------------
export const tableData = {
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


export const financialData = [
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  }, {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
  {
    title: 'hello',
    briefDescription: 'Somethign',
    amount: 20209283,
    corruptionRelated: true,
  },
];

// ------------------- LAWS -------------------------
export const lawsData = [{
  code: 2,
  briefDescription: 'This law talks about this issue',
  category: 'Hello',
  source: ' This is my source',
}, {
  code: 2,
  briefDescription: 'This law talks about this issue',
  category: 'Hello',
  source: ' This is my source',
}, {
  code: 2,
  briefDescription: 'This law talks about this issue',
  category: 'Hello',
  source: ' This is my source',
}, {
  code: 2,
  briefDescription: 'This law talks about this issue',
  category: 'Hello',
  source: ' This is my source',
}];

// ------------------- RELATIONSHIPS ----------------------
// InformativeSnippets

export const informativeSnippetCardData = [{
  id: 1,
  size: 'full',
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
  id: 2,
  size: 'full',
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
  id: 3,
  size: 'half',
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
  id: 4,
  size: 'half',
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

// Individual
export const individualCardData = [{
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

// Corruption Case

export const corruptionCaseCardData = [{
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
