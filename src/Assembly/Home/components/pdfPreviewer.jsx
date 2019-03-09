import React from 'react';
import PDFViewer from 'mgr-pdf-viewer-react';

const manual = `${process.env.PUBLIC_URL}/Manual_Voto_Informado_2019.pdf`;

const PDF = () => (
  <PDFViewer
    document={{ url: manual }}
    scale={0.9}
    css="customViewer"
    navigation={{
      css: {
        previousPageBtn: 'customPrevBtn',
        nextPageBtn: 'customNextBtn',
        pages: 'customPages',
        wrapper: 'customWrapper',
      },
    }}
  />
);

export default PDF;
