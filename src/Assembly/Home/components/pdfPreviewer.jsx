import React from 'react';
import PDFViewer from 'mgr-pdf-viewer-react';

const manual = `${process.env.PUBLIC_URL}/Manual_Voto_Informado_2019.pdf`;

const PDF = () => (
  <PDFViewer
    document={{ url: manual }}
    scale={1}
  />
);

export default PDF;
